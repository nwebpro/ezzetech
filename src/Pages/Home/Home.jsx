import React from 'react';
import Achievements from './Achievements/Achievements';
import CoBrands from './CoBrands/CoBrands';
import Counter from './Counter/Counter';
import Hero from './Hero/Hero';
import RecentWork from './RecentWork/RecentWork';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Home = () => {
    return (
        <>
            <Hero />
            <WhatWeDo />
            <RecentWork />
            <Counter />
            <Achievements />
            <CoBrands />
        </>
    );
};

export default Home;