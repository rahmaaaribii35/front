import React from 'react';
import Hero from '../compoenents/Hero';
import LatestCollection from '../compoenents/LatestCollection';
import Carousel from '../compoenents/Carousel';
import BestSeller from '../compoenents/BestSeller';
import OurPolicy from '../compoenents/OurPolicy';
import NewsletterBox from '../compoenents/NewsletterBox';

const Home = () => {
  return (
    <div>
      <br /><br /><Carousel /><br /><br /><br />
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
