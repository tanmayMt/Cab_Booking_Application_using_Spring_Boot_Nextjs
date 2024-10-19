
import Banner from "./components/Banner";
import CarVideoSection from "./components/CarVideoSection";
import Footer from "./components/Footer";
import HomeNavbar from "./components/HomeNavbar";

export default function Home() {
  return (
      <main className="h-screen">
       <HomeNavbar/>
       <Banner/>
       <CarVideoSection/>
       <Footer/>
      </main>
  );
}
