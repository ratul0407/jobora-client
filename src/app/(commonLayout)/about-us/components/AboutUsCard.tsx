import { Button } from "@/components/ui/button";
import { Brush, Smile, Target } from "lucide-react";

const content = [
  {
    icon: Brush,
    title: "Disruptive creativity",
    description:
      "Hire highly talented and creative individuals who are passionate about their work and are willing to push beyond themselves to achieve your goals.",
  },
  {
    icon: Target,
    title: "Interview Candidates",
    description:
      "You can hire and interview a candidate in the same tab without going anywhere else. You can group interview a multiple of candidates as well.",
  },
  {
    icon: Smile,
    title: "Hiring was never so easy",
    description:
      "Hiring someone takes a lot of time and a lot of stress, and a lot of money. Now you can hire someone in a single click.",
  },
];
const AboutUsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16 ">
      {content.map((item, index) => (
        <div
          key={index}
          className={`border  p-4 rounded-xl flex flex-col justify-between gap-4 md:gap-8 ${index === 1 && "bg-orange-50"}`}
        >
          <div
            className={`bg-gray-100 w-fit rounded-full p-2 ${index === 1 && "bg-orange-500"}`}
          >
            <item.icon
              className={`stroke-1 size-8 ${index === 1 && "text-white"}`}
            />
          </div>
          <h3 className="text-black font-semibold text-xl">{item.title}</h3>
          <hr />
          <p className="text-gray-400 font-medium">{item.description}</p>
          <Button className={`py-5 ${index === 1 && "bg-orange-500 "}`}>
            Learn More
          </Button>
        </div>
      ))}
    </div>
  );
};

export default AboutUsCard;
