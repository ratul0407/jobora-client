import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle } from "lucide-react";
import Image from "next/image";
import AboutUsCard from "./components/AboutUsCard";
import FAQ from "./components/FAQ";
import SectionHeading from "@/components/shared/Heading";
const AboutUsPage = () => {
  return (
    <div className="space-y-8 md:space-y-12 mb-20">
      <div className="flex flex-col gap-8 md:flex-row md:gap-16 md:*:py-8 lg:border-y ">
        <div className="space-y-4 md:space-y-12">
          <p className="text-orange-500 font-semibold uppercase">
            About Jobora
          </p>
          <div className="space-y-4 sm:space-y-8">
            <h2 className="font-bold text-8xl">
              120K<span className="text-orange-500">+</span>
            </h2>
            <span className="italic text-gray-400">
              - Candidates have been hired from all over the world
            </span>
          </div>
        </div>
        <div className="hidden lg:block w-px bg-border self-stretch"></div>
        <div className="space-y-12">
          <SectionHeading
            gray=" We exist only for companies who speak louder, stand taller and never
            apologize"
            black="for taking up space."
          />
          <div className="flex justify-between items-center">
            <Button className="py-8 px-6 rounded-full flex gap-4 cursor-pointer">
              Contact Us{" "}
              <span className="bg-white rounded-full p-2">
                <ArrowRight className="text-black" />
              </span>
            </Button>
            <div className="flex">
              <Image
                className="rounded-full border border-white size-[50] object-center object-cover"
                src="/images/about_page_user1.jpg"
                alt="User1"
                width={50}
                height={50}
              />
              <Image
                className="-ml-3 border border-white rounded-full size-[50] object-center object-cover"
                src="/images/about_page_user2.jpg"
                alt="User2"
                width={50}
                height={50}
              />
              <div className="-ml-3 bg-orange-500 w-fit p-3 border border-white rounded-full">
                <Sparkle className="stroke-white fill-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Cards */}
      <AboutUsCard />
      <FAQ />
    </div>
  );
};

export default AboutUsPage;
