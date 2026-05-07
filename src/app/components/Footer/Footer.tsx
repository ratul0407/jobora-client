import FadeOutParagraph from "../FadeOutParagraph";
import DotsField from "./DotsField/DotsField";

const Footer = () => {
  return (
    <footer className="p-2">
      <div className="min-h-[98vh]  justify-between flex flex-col bg-zinc-100 rounded-4xl md:rounded-[5rem] px-4 pt-4 pb-8 md:px-8 md:pt-8 md:pb-12">
        <div className="space-y-12 md:flex md:justify-between md:px-20 md:pt-10">
          <h3 className="text-8xl md:text-9xl font-semibold">Jobora</h3>
          <div className="space-y-12 md:flex md:flex-col gap-20">
            <ul className="grid grid-cols-2 gap-4 *:font-semibold *:text-lg md:gap-x-24">
              <li>
                <FadeOutParagraph text="JOBS" />
              </li>
              <li>
                <FadeOutParagraph text="COMPANIES" />
              </li>
              <li>
                <FadeOutParagraph text="SERVICES" />
              </li>
              <li>
                <FadeOutParagraph text="COMMUNITY" />
              </li>
            </ul>
            <div>
              <ul className="grid grid-cols-2 *:text-gray-400 *:text-lg *:font-semibold md:gap-x-24">
                <div className="space-y-4">
                  <li>
                    <FadeOutParagraph text="Privacy Policy" />
                  </li>
                  <li>
                    <FadeOutParagraph text="Terms of Service" />
                  </li>
                  <li>
                    <FadeOutParagraph text="Cookie Policy" />
                  </li>
                </div>
                <li>
                  <FadeOutParagraph text="Instagram" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DotsField />
      </div>
    </footer>
  );
};

export default Footer;
