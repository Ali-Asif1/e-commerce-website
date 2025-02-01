import { Suspense } from "react";
import Checkout from "@/components/checkout"; // Move your Checkout logic to a separate file

// export const dynamic = "force-dynamic"; // Prevents static generation

export default function CheckoutDisplay() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <Checkout />
    </Suspense>
  );
}

