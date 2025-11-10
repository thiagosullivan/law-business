import Logo from "@/utils/icons/logo";
import { Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const attorneys: { title: string; href: string }[] = [
  {
    title: "Maxwell Frost",
    href: "/attorney/maxwell-frost",
  },
  {
    title: "Isabella Cruz",
    href: "/attorney/isabella-cruz",
  },
  {
    title: "Oliver Quinn",
    href: "/attorney/oliver-quinn",
  },
  {
    title: "Victoria Knight",
    href: "/attorney/victoria-knight",
  },
];
const services: { title: string; href: string }[] = [
  {
    title: "Discrimination Claims",
    href: "/services/discrimination-claims",
  },
  {
    title: "Criminal Defense",
    href: "/services/isabella-cruz",
  },
  {
    title: "Immigration Services",
    href: "/services/immigration-services",
  },
  {
    title: "Personal Injury Claims",
    href: "/services/personal-injury-claims",
  },
];

const Header = () => {
  return (
    <header className="shadow-md">
      {/* Top header */}
      <div className="top-header bg-secondary-foreground">
        <div className="centered-element py-2.5 flex justify-between">
          <div className="flex items-center gap-x-4">
            <div className="text-primary-foreground text-xs flex items-center gap-x-1">
              <Smartphone size={14} />
              <p>Call us: 1-800-643-4300</p>
            </div>
            <div className="text-primary-foreground text-xs flex items-center gap-x-1">
              <Mail size={14} />
              <p>info@lawbusiness.com.br</p>
            </div>
          </div>
          <div className="top-head">
            <ul className="flex items-center gap-x-2">
              <li className="text-primary-foreground">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <RiFacebookFill />
                </a>
              </li>
              <li className="text-primary-foreground">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <RiTwitterXFill />
                </a>
              </li>
              <li className="text-primary-foreground">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <RiLinkedinFill />
                </a>
              </li>
              <li className="text-primary-foreground">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <RiYoutubeFill />
                </a>
              </li>
              <li className="text-primary-foreground">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <RiInstagramLine />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header centered-element flex justify-between py-8">
        <Link href="/">
          <Logo />
        </Link>
        <div className="menu-navigation">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="hover:bg-transparent focus:bg-transparent hover:text-primary font-medium font-playfair"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="ITEMS">
                <NavigationMenuTrigger className="font-playfair">
                  Attorney
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-1 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                    {attorneys.map((attorney) => (
                      <li key={attorney.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={attorney.href}
                            className="hover:bg-transparent focus:bg-transparent hover:text-primary"
                          >
                            {attorney.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-playfair">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-1 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="hover:bg-transparent focus:bg-transparent hover:text-primary"
                          >
                            {service.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="hover:bg-transparent focus:bg-transparent hover:text-primary font-medium font-playfair"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
