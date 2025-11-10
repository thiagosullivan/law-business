import AboutHome from "@/components/AboutHome";
import AreasHome from "@/components/AreasHome";
import { HeroCarousel } from "@/components/HeroCarousel";
import NewsHome from "@/components/NewsHome";
import PartnersHome from "@/components/Partners";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutHome />
      <AreasHome />
      <NewsHome />
      <PartnersHome />
    </main>
  );
}
