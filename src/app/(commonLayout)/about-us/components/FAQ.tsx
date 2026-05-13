"use client";
import SectionHeading from "@/components/shared/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faq = [
  {
    question: "How do I ensure I’m hiring qualified candidates?",
    answer: `We provide several tools to help you vet talent efficiently. Beyond reviewing resumes, employers can view candidate portfolios, check verified skill badges, and use our built-in messaging system to conduct initial screenings. We also recommend setting specific "screening questions" during the job posting process to filter applicants based on must-have qualifications or years of experience.`,
  },
  {
    question:
      "What is the process for contacting a candidate after they apply?",
    answer: `Once a candidate submits an application, their profile will appear in your Employer Dashboard. From there, you can move them through various stages of your pipeline (e.g., "Shortlisted," "Interviewing," or "Hired"). You can initiate a conversation directly through our secure platform to schedule interviews or request additional documentation, keeping all professional communication in one centralized location.`,
  },
  {
    question:
      "Can I manage multiple job postings and team members on one account?",
    answer: `Yes. Our platform is designed for scalability. Through the Company Profile settings, primary account holders can post multiple listings simultaneously and invite team members (such as HR managers or department heads) to collaborate. Collaborators can leave internal notes on candidate profiles and update application statuses to ensure the entire hiring team stays aligned.`,
  },
];
const FAQ = () => {
  const [curVideo, setCurVideo] = useState(0);

  return (
    <div className="space-y-12">
      <div className="w-[70%]">
        <SectionHeading
          gray="Every project starts from zero and ends with a punch"
          black="At Indigo we don't do templates."
        />
      </div>
      <div className="flex items-start justify-between gap-12">
        <Accordion
          type="single"
          collapsible
          className="max-w-4xl"
          defaultValue="How do I ensure I’m hiring qualified candidates?"
        >
          {faq.map(({ question, answer }, index) => {
            return (
              <AccordionItem
                value={question}
                key={index}
                onClick={() => setCurVideo(index)}
              >
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="">
          <video
            src={
              curVideo === 0
                ? "/videos/handshake.mp4"
                : curVideo === 1
                  ? "/videos/online_meeting.mp4"
                  : "/videos/meetings.mp4"
            }
            autoPlay
            muted
            loop
            className="rounded-xl min-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
