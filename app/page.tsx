import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experiences from "@/components/experiences";
import ContactMe from "@/components/contact-me";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <AboutMe />
      <Projects />
      <Skills />
      <Experiences />
      <ContactMe />
      <Toaster position="bottom-right" />
    </main>
  );
}
