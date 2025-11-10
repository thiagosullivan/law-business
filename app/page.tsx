import AboutHome from "@/components/AboutHome";
import AreasHome from "@/components/AreasHome";
import { HeroCarousel } from "@/components/HeroCarousel";
import NewsHome from "@/components/NewsHome";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutHome />
      <AreasHome />
      <NewsHome />
    </main>
  );
}
