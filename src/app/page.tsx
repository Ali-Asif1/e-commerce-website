import { DressStyle } from "@/components/DressStyle";

import { Hero } from "@/components/Hero";
import { NewArrivals } from "@/components/NewArrivals";
import { Tags } from "@/components/Tags";
import { Testomonial } from "@/components/Testomonial";
import { TopSelling } from "@/components/TopSelling";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px]">
      <Hero />
      <Tags />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Testomonial />
    </div>
  );
}
