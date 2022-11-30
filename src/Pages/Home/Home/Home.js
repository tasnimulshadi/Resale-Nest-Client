import React from 'react';
import Hero from '../Hero/Hero';
import HomeAdvertiseSection from '../HomeAdvertiseSection/HomeAdvertiseSection';
import HomeCategoryItems from '../HomeCategoryItems/HomeCategoryItems';
import HomeFeatures from '../HomeFeatures/HomeFeatures';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <HomeAdvertiseSection></HomeAdvertiseSection>
            <HomeCategoryItems></HomeCategoryItems>
            <HomeFeatures></HomeFeatures>
        </div>
    );
};

export default Home;