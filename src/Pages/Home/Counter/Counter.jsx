import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <section className='bg-counter-bg bg-cover bg-center bg-no-repeat relative z-0 after_style text-white py-[50px] md:py-20 lg:py[100px] font-OpenSans'>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-[30px]">
                    <div className='text-center space-y-4'>
                        <h2 className='text-5xl font-bold'>2013</h2>
                        <p className='text-lg '>Ezze Technology Ltd. was launched from Bangladesh.</p>
                    </div>
                    <div className='text-center space-y-4'>
                        <span className='text-5xl font-bold'><CountUp duration={5} end={50} />+</span>
                        <p className='text-lg'>Ezze Technology Ltd. has grown to a team of 50 talented individuals.</p>
                    </div>
                    <div className='text-center space-y-4'>
                        <span className='text-5xl font-bold'><CountUp duration={5} end={200} />+</span>
                        <p className='text-lg'>Since 2013, Arround 200+ websites & apps have been created by the team of Ezze Technology Ltd.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;