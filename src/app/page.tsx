import  BestSelling  from "@/components/BestSelling";
import { Hero } from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import { Tags } from "@/components/Tags";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px]">
      <Hero />
      <Tags />
      <NewArrivals />
      <Suspense fallback={<div>Loading Best Selling...</div>}>
      <BestSelling />
    </Suspense>
     
    </div>
  );
}
