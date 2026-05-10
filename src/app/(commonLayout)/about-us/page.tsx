import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle } from "lucide-react";
import Image from "next/image";
import AboutUsCard from "./components/AboutUsCard";
const AboutUsPage = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* <div className="min-h-screen">
        <div className="flex items-start justify-start w-auto absolute top-0 min-h-screen min-w-screen right-0 border -z-2 mt-8 flex-justify-center">
          <video
            src="https://res.cloudinary.com/dytwdaqzu/video/upload/v1778425622/46285-446732353_lsuqkz.mp4?tr=w-800"
            autoPlay
            muted
            loop
          />
        </div>
      </div> */}
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
          <h3 className="text-black/60 font-semibold text-3xl sm:text-4xl md:text-6xl">
            We exist only for companies who speak louder, stand taller and never
            apologize <span className="text-black">for taking up space.</span>
          </h3>
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
    </div>
  );
};

export default AboutUsPage;
