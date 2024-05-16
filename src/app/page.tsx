// src/pages/index.tsx
'use client';
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';

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
        <h1 >Welcome to tienthedev</h1>
      </main>
  );
};

export default Home;
