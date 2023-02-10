import React from 'react';
import Achievements from './Achievements/Achievements';
import CoBrands from './CoBrands/CoBrands';
import Counter from './Counter/Counter';
import Hero from './Hero/Hero';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Home = () => {
    return (
        <>
            <Hero />
            <WhatWeDo />
            <Counter />
            <Achievements />
            <CoBrands />
        </>
    );
};

export default Home;