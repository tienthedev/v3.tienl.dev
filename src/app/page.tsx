// src/pages/index.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // 6 seconds total (4 seconds fade up + 2 seconds fade out)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
      <main className={`animate-fadeUp`}>
        <h1>Welcome to tienthedev</h1>
      </main>
  );
};

export default Home;
