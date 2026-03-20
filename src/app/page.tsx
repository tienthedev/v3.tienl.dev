'use client';
import Navbar from "@/components/Navbar/Navbar";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Footer from "@/components/Footer/Footer";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects"
import { SectionKey } from '@/types/sections';


const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<SectionKey>('hero');

  const scrollToSection = useCallback((section: SectionKey) => {
    const sectionMap: Record<SectionKey, React.RefObject<HTMLElement | null>> = {
      hero: heroRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    };

    const target = sectionMap[section].current;
    if (!target) return;

    const navOffset = 96;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top, behavior: 'smooth' });
    setActiveSection(section);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const nextSection = visible[0]?.target.getAttribute('data-section') as SectionKey | null;
        if (nextSection) {
          setActiveSection(nextSection);
        }
      },
      {
        root: null,
        rootMargin: '-120px 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    );

    const sections = [heroRef.current, experienceRef.current, projectsRef.current, contactRef.current].filter(Boolean);
    sections.forEach((section) => observer.observe(section as HTMLElement));

    return () => observer.disconnect();
  }, []);

  return (
      <main>
        <Navbar onNavigate={scrollToSection} activeSection={activeSection} />
        <section ref={heroRef} data-section="hero">
          <Hero />
        </section>
        <section ref={experienceRef} data-section="experience">
          <Experience/>
        </section>
        <section ref={projectsRef} data-section="projects">
          <Projects />
        </section>
        <section ref={contactRef} data-section="contact">
          <Footer />
        </section>

      </main>
  );
};

export default Home;
