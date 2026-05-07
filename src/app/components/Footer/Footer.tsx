import DotsField from "./DotsField/DotsField";

const Footer = () => {
  return (
    <footer className="p-2">
      <div className="min-h-[98vh]  justify-between flex flex-col bg-zinc-100 rounded-4xl md:rounded-[5rem] px-4 pt-4 pb-8 md:px-8 md:pt-8 md:pb-12">
        <div className="space-y-12 md:flex md:justify-between md:px-20 md:pt-10">
          <h3 className="text-8xl md:text-9xl font-semibold">Jobora</h3>
          <div className="space-y-12 md:flex md:flex-col gap-20">
            <ul className="grid grid-cols-2 gap-4 *:font-semibold *:text-lg md:gap-x-24">
              <li>JOBS</li>
              <li>COMPANIES</li>
              <li>SERVICES</li>
              <li>COMMUNITY</li>
            </ul>
            <div>
              <ul className="grid grid-cols-2 *:text-gray-400 *:text-lg *:font-semibold md:gap-x-24">
                <div className="space-y-4">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                </div>
                <li>Instagram</li>
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
