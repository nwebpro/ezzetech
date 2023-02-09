import React from 'react';
import Achievements from './Achievements/Achievements';
import Counter from './Counter/Counter';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Home = () => {
    return (
        <>
            <WhatWeDo />
            <Counter />
            <Achievements />
        </>
    );
};

export default Home;