import { AboutCardsTypes } from "@/types/AboutHomeTypes";
import Image from "next/image";
import Link from "next/link";

interface CardAboutProps {
  item: AboutCardsTypes;
}

export const CardAbout = ({ item }: CardAboutProps) => {
  return (
    <div className="max-w-[280px] border-r border-gray-300 px-6 pb-3">
      <div className="flex flex-col gap-y-6 mb-10">
        <Image src={item.icon} width={65} height={61} alt={item.title} />
        <h3 className="font-playfair text-2xl">{item.title}</h3>
        <p className="text-muted-foreground text-lg">{item.text}</p>
      </div>
      <Link
        href={item.url}
        className="font-playfair text-xl hover:bg-white hover:text-neutral-900 transition duration-200"
      >
        <span className="font-medium mr-2">Read More</span> &#8594;
      </Link>
    </div>
  );
};
