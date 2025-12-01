import Hero from "../NewHerosection";
import Navbar from "../navbar";
import Features from "../features-section";
import HowItWorks from "../howitworks-section";
import Mission from "../Aboutus-section";
import Footer from "../footer";



const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-quick">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Mission />
      <Footer></Footer>
    </div>
  );
}

export default LandingPage




