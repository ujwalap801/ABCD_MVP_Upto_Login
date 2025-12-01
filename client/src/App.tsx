// src/App.tsx
import Hero from "./components/NewHerosection";
import Navbar from "./components/navbar";
import Features from "./components/features-section";
import HowItWorks from "./components/howitworks-section";
import Mission from "./components/Aboutus-section";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-quick">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Mission />
      <Footer />
    </div>
  );
}
