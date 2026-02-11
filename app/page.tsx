import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { EducationSection } from '@/components/education-section'
import { InternshipsSection } from '@/components/internships-section'
import { ProjectsSection } from '@/components/projects-section'
import { CertificatesSection } from '@/components/certificates-section'
import { AchievementsSection } from '@/components/achievements-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <InternshipsSection />
      <ProjectsSection />
      <CertificatesSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  )
}
