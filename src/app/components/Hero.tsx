import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HeroComponent = () => {
  return (
    <div>
      <section>
        <div>
          <h1 className="uppercase font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl">
            WORK MADE
            <div className="flex items-center gap-2 sm:gap-10 md:gap-32 lg:gap-32">
              <div className="flex items-center gap-2">
                <Input
                  className="w-auto my-5 font-normal rounded-full sm:py-6 md:py-8 lg:w-96"
                  placeholder="Search Jobs"
                />
                <Button className="size-12 md:size-14 rounded-full">
                  <Search className="size-4 sm:size-5 md:size-6" />
                </Button>
              </div>
              <div>SIMPLE</div>
            </div>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default HeroComponent;
