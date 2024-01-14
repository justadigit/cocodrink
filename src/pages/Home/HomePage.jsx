import Layout from '@/layouts/Layout';
import React from 'react';

import MostPopularSection from '@/pages/Home/components/MostPopularSection';
import LatestSection from '@/pages/Home/components/LatestSection';
function HomePage() {
  return (
    <Layout title={'Home'}>
      <h1 className="w-full text-6xl font-bold border-b-4 pb-8 mt-10">
        Today Recipes
      </h1>
      <MostPopularSection />
      <LatestSection />
    </Layout>
  );
}

export default HomePage;
