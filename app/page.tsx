import AboutHome from "@/components/AboutHome";
import AreasHome from "@/components/AreasHome";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutHome />
      <AreasHome />
    </main>
  );
}
