import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import WorkSection from '@/components/sections/work';
import CertificateDetails from '@/components/sections/certificates';
import ScrollReveal from '@/components/layout/scroll-reveal';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollReveal>
        <AboutMeSection />
      </ScrollReveal>
      <ScrollReveal>
        <SkillsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ExperienceSection />
      </ScrollReveal>
      <ScrollReveal>
        <CertificateDetails/>
      </ScrollReveal>
      <ScrollReveal>
        <WorkSection />
      </ScrollReveal>
      {/* <TestimonialsSection /> */}
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </>
  );
}
