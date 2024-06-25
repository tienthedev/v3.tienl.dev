'use client';
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import Hero from '../components/Hero/Hero';
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects"

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 4 seconds total (2 seconds fade up + 2 seconds fade out)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
      <main>
        <Navbar />
        <Hero />
          <About />
          <Experience/>
          <Projects />
          <Footer />

      </main>
  );
};

export default Home;
