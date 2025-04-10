import About from "@/components/aboutme";
import SkillsSection from "@/components/elements";
import ExpertiseSection from "@/components/expertise";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import MultipleSection from "@/components/multiplesection";
import ProjectsSection from "@/components/project";
import Portfolio from "@/components/project";
import Resume from "@/components/resume";


export default function Home() {
  return (
   <>
   <HeroSection/>
   <ExpertiseSection/>
   <About/>
   <SkillsSection/>
   <Resume/>
   <ProjectsSection/>
   <Footer/>
   </>
  );
}
