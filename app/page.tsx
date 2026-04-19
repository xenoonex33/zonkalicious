import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Merch from "@/components/Merch";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="divider-gradient" />
      <About />
      <div className="divider-gradient" />
      <Products />
      <div className="divider-gradient" />
      <Merch />
      <div className="divider-gradient" />
      <Contact />
      <Footer />
    </main>
  );
}
