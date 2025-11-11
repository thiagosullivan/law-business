import AboutHome from "@/components/AboutHome";
import AreasHome from "@/components/AreasHome";
import { HeroCarousel } from "@/components/HeroCarousel";
import NewsHome from "@/components/NewsHome";
import PartnersHome from "@/components/PartnersHome";
import TeamHome from "@/components/TeamHome";
import TestimonialsHome from "@/components/TestimonialsHome";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutHome />
      <AreasHome />
      <TestimonialsHome />
      <TeamHome />
      <NewsHome />
      <PartnersHome />
    </main>
  );
}
