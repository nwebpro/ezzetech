import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <section className='slider-fixed-height flex items-center px-[15px] pt-[150px] pb-[100px] lg:pt-[200px] lg:pb-[150px] font-OpenSans'>
            <div className="container mx-auto grid grid-cols-12">
                <div className='space-y-5 col-span-12 xl:col-span-9'>
                    <h1 className='text-[#000248] text-5xl md:text-[50px] lg:text-[70px] leading-[50px] lg:leading-[80.5px] font-bold'>Welcome to <span className='text-ezze-theme'>Innovation!</span></h1>
                    <p className='text-body-text text-xl leading-8 font-normal max-w-[650px]'>Ezze Technology Limited (ETL) formerly known as Ezze Technology was founded in 2012 by some young, assiduous and innovative Entrepreneur which basically deems to deal with the Information Technology and inventive solution.</p>
                    <div>
                        <Link className='bg-ezze-theme px-10 py-5 inline-flex mt-10 text-white text-base font-bold border border-ezze-theme transition-colors duration-300 hover:bg-transparent hover:text-ezze-theme' to='/'>See Our Projects</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;