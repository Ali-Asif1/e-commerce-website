import { Suspense } from "react";
import Checkout from "@/components/checkout"; 



export default function CheckoutDisplay() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <Checkout />
    </Suspense>
  );
}

