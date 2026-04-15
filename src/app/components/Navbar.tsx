import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const NavbarComponent = () => {
  return (
    <header className="p-8">
      <nav className="flex items-center  justify-between">
        <h3>Jobora</h3>
        <ul className="hidden">
          <li>Jobs</li>
          <li>Companies</li>
          <li>Services</li>
          <li>Community</li>
        </ul>
        <Button className="hidden">Sign In</Button>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            {/* <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter> */}
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default NavbarComponent;
