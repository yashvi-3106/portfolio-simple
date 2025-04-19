import Navbar from "@/components/navbar"
import HomeSection from "@/components/home-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <Navbar />
      <section id="home" className="min-h-screen">
        <HomeSection />
      </section>
      <section id="about" className="min-h-screen py-20">
        <AboutSection />
      </section>
      <section id="skills" className="min-h-screen py-20">
        <SkillsSection />
      </section>
      <section id="projects" className="min-h-screen py-20">
        <ProjectsSection />
      </section>
      <section id="resume" className="min-h-screen py-20">
        <ResumeSection />
      </section>
      <section id="contact" className="min-h-screen py-20">
        <ContactSection />
      </section>
    </main>
  )
}
