



import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      console.error("❌ Error: No items received");
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    console.log("✅ Items received:", items);

    // Calculate total for the items before delivery fee
    const subtotal = items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
    const discount = items.reduce((acc: number, item: any) => acc + (item.price * item.quantity * (item.discountPercent || 0)) / 100, 0);
    
    // Add delivery fee as a fixed amount, separate from item calculation
    const deliveryFee = 15;
    
    // Calculate total including delivery fee
    const totalAmount = Math.round((subtotal - discount + deliveryFee) * 100); // Convert to cents

    console.log(`✅ Total calculated: $${(totalAmount / 100).toFixed(2)}`);

    // Create line items for each product in the cart
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image], // Send each product's image individually
        },
        unit_amount: Math.round((item.price - (item.price * (item.discountPercent || 0)) / 100) * 100), // Price after discount
      },
      quantity: item.quantity,
    }));

    console.log("✅ Line items prepared:", lineItems);

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      // Add a metadata property with totalAmount (if you need to track it)
      metadata: {
        totalAmount: totalAmount.toString(), // Pass the total amount as metadata if needed
      },
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
      // Don't add delivery fee as a line item, it's already factored in
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: deliveryFee * 100, // Convert to cents
              currency: "usd",
            },
            display_name: "Delivery Fee",
          },
        },
      ],
    });

    console.log("✅ Stripe session created:", session.url);

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("❌ Stripe Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

