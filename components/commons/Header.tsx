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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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
          <div>
            <ul className="flex items-center gap-x-2">
              <li className="text-primary-foreground">
                <a href="#">
                  <RiFacebookFill />
                </a>
              </li>
              <li className="text-primary-foreground">
                <a href="#">
                  <RiTwitterXFill />
                </a>
              </li>
              <li className="text-primary-foreground">
                <a href="#">
                  <RiLinkedinFill />
                </a>
              </li>
              <li className="text-primary-foreground">
                <a href="#">
                  <RiYoutubeFill />
                </a>
              </li>
              <li className="text-primary-foreground">
                <a href="#">
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
        <div>
          <nav>
            <ul className="flex items-center gap-x-8 text-lg">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    Attorneys
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Maxwell Prost</DropdownMenuItem>
                    <DropdownMenuItem>Isabela Cruz</DropdownMenuItem>
                    <DropdownMenuItem>Oliver Quinn</DropdownMenuItem>
                    <DropdownMenuItem>Victoria Knight</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    Services
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <Link href="/">Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
