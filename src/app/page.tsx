import  BestSelling  from "@/components/BestSelling";
import { Hero } from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import { Tags } from "@/components/Tags";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px]">
      <Hero />
      <Tags />
      <NewArrivals />
      <BestSelling />
     
    </div>
  );
}
