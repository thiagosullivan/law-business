import { CarouselHero } from "@/types/carouselTypes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import Link from "next/link";

const carouselImgs: CarouselHero[] = [
  {
    url: "https://law-business.cmsmasters.studio/wp-content/uploads/revslider/slider-1/home-1.jpg",
    icon: undefined,
    title: "Reliable & Effective",
    subtitle: "legal solutions",
    buttonText: "Request Free Evaluation",
    buttonUrl: "/contact",
  },
  {
    url: "https://law-business.cmsmasters.studio/wp-content/uploads/revslider/slider-1/slide-2.jpg",
    title: "Qualified",
    subtitle: "legal advice",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eos autem unde enim debitis mollitia.",
    buttonText: "Find Out More",
    buttonUrl: "/",
    highlight: true,
  },
  {
    url: "https://law-business.cmsmasters.studio/wp-content/uploads/revslider/slider-1/slide-3.jpg",
    title: "Right Way",
    subtitle: "to the legal help.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos enim quae. Totam commodi eos recusandae assumenda corrupti quam eaque?",
    buttonText: "View Our Expertise →",
    buttonUrl: "/",
    highlight: true,
  },
];
export function HeroCarousel() {
  return (
    <Carousel className="w-full max-w-dvw max-h-[650px] relative">
      <CarouselContent>
        {carouselImgs.map((item, index) => (
          <CarouselItem
            key={index}
            className="lg:h-[700px] bg-cover"
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <div className="centered-element flex items-center h-full text-white">
              <div>
                <h2 className="font-playfair text-6xl mb-3">{item.title}</h2>
                <h3
                  className={`font-playfair text-3xl mb-6 w-fit ${
                    item.highlight && "bg-primary px-4"
                  }`}
                >
                  {item.subtitle}
                </h3>
                {item.text && (
                  <p className="mb-10 max-w-[400px]">{item.text}</p>
                )}
                <Button asChild>
                  <Link
                    href={item.buttonUrl ? item.buttonUrl : "/"}
                    className="rounded-none text-lg! font-playfair py-4! px-8! h-full"
                  >
                    {item.buttonText}
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-1/2 -translate-y-1/2 w-full">
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </div>
    </Carousel>
  );
}
