import Footer from "../components/Footer/Footer";
import NavbarComponent from "../components/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative flex flex-col justify-between min-h-screen p-4 sm:p-8 md:p-0">
        <div className="container mx-auto pt-4 md:pt-12 space-y-2 md:space-y-12 lg:space-y-24 min-h-screen">
          <NavbarComponent />
          <main className="space-y-12 md:space-y-24 mt-20">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CommonLayout;
