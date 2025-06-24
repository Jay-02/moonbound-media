import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import LogoComponent from "./LogoComponent";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-base text-text-main max-h-[25%] overflow-clip ">
      <Card className="container py-3 px-4 border-0 flex items-center justify-around gap-6  mt-2 ">
        <span className="w-[125.5px] h-auto">
          <LogoComponent />
        </span>
        <ul className="hidden md:flex items-center gap-10 ">
          <li className="text-primary font-medium">
            <a href="/">Home</a>
          </li>
          <li>
           </li>
          <li>
            <a href="About_Us">About Us</a>
          </li>
          <li></li>
        </ul>

        <div className="flex items-center">
          <a href="Cart">
            <ShoppingCart />
          </a>
          <div className="flex md:hidden mr-2 items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5 rotate-0 scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <a>Home</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="Categories">Categories</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="Custom_Order">Customize Your Item</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="About_Us">About Us</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant="" className="w-full text-sm">
                    Cart
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Navbar;
