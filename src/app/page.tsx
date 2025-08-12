import Navbar from "./components/Navbar";
import Skills from "./components/Skills"
import Project from "./components/Project"
import HeroSection from "./components/HeroSection";
import Experince from "./components/Experince";
import Footer from "./components/LastFooter"
import ContactForm from "./components/ContactForm";
import NewProject from "./components/NewProject";
import Talk from "./components/Talk";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <HeroSection/>
      <Skills/>
      <Experince/>
      <NewProject/>
      <Project/>
      <ContactForm/>
      <Talk/>
      <Footer/>
    </main>
  );
}
