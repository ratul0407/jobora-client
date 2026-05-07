import Footer from "../components/Footer/Footer";
import HeroComponent from "../components/Hero";
import NavbarComponent from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="container mx-auto pt-4 md:pt-12 space-y-2 md:space-y-12 lg:space-y-24 min-h-screen">
        <div>
          <NavbarComponent />
        </div>
        <main>
          <HeroComponent />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
