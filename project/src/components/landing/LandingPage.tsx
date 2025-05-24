import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import CTA from "./CTA";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col w-full">
      <Navbar />
      <main className="w-full">
        <div className="">
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
