'use client';
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects"


const Home: React.FC = () => {


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
