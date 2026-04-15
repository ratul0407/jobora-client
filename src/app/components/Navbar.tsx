"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
const NavbarComponent = () => {
  return (
    <header>
      <nav className="flex items-center  justify-between">
        <h3>Jobora</h3>
        <ul className="hidden md:flex md:gap-4 lg:gap-8">
          <li>Jobs</li>
          <li>Companies</li>
          <li>Services</li>
          <li>Community</li>
        </ul>
        <Link href="/sign-in">
          <Button className="hidden md:block">Sign In</Button>
        </Link>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation menu
                </SheetDescription>
              </SheetHeader>
              <div className="p-8">
                <ul className="flex flex-col gap-8 uppercase">
                  <li>Jobs</li>
                  <li>Companies</li>
                  <li>Services</li>
                  <li>Community</li>
                </ul>
              </div>
              <SheetFooter>
                <Button>Sign In</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;
