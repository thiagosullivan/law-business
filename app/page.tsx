import AboutHome from "@/components/AboutHome";
import AreasHome from "@/components/AreasHome";
import { HeroCarousel } from "@/components/HeroCarousel";
import NewsHome from "@/components/NewsHome";
import PartnersHome from "@/components/PartnersHome";
import TestimonialsHome from "@/components/TestimonialsHome";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutHome />
      <AreasHome />
      <TestimonialsHome />
      <NewsHome />
      <PartnersHome />
    </main>
  );
}
