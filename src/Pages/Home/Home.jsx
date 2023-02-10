import React from 'react';
import Achievements from './Achievements/Achievements';
import CoBrands from './CoBrands/CoBrands';
import Counter from './Counter/Counter';
import Hero from './Hero/Hero';
import OurClients from './OurClients/OurClients';
import OurPartner from './OurPartner/OurPartner';
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
            <OurClients />
            <OurPartner />
            <CoBrands />
        </>
    );
};

export default Home;