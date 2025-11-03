import { Facebook, Mail, Smartphone } from "lucide-react";
import React from "react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Header = () => {
  return (
    <header>
      {/* Top header */}
      <div className="top-header bg-secondary-foreground">
        <div className="max-w-6xl w-full mx-auto py-2.5 flex justify-between">
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
    </header>
  );
};

export default Header;
