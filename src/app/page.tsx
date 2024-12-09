import { DressStyle } from "@/components/DressStyle";
import { Footer } from "@/components/Footer";
import { Header1 } from "@/components/Header1";
import { Header2 } from "@/components/Header2";
import { Hero } from "@/components/Hero";
import { NewArrivals } from "@/components/NewArrivals";
import { Tags } from "@/components/Tags";
import { Testomonial } from "@/components/Testomonial";
import { TopSelling } from "@/components/TopSelling";
import { Update } from "@/components/Update";


export default function Home() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Hero />
      <Tags />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Testomonial />
      <Update />
      <Footer />
    </div>
  );
}
