import React from 'react';
import achievements from '../../../assets/images/achive-two.jpg';
import achieve from '../../../assets/images/axhiv.gif';

const achievementsData = [
    {
        id: 1,
        img: achieve,
        title: 'NATIONAL MOBILE APP DEVELOPMENT AWARD-15',
        description: 'Awarded For Live Blood Bank Mobile Application, Category- Health & Environment, Position: Runner-up',
    },
    {
        id: 2,
        img: achieve,
        title: 'BEST LIVE STREMING AWARD',
        description: 'Online Streaming Partnership: Bangladesh ICT Expo-2015 (15 June to 17 June) at BICC',
    },
    {
        id: 3,
        img: achieve,
        title: 'ARIJIT SINGH LIVE IN CONCERT',
        description: 'Arijit Singh Live in Concert: 12th Dec 2014 — at Jamuna Future Park, Dhaka',
    }
]

const Achievements = () => {
    return (
        <section className='py-[50px] md:py-20 lg:py-[100px] px-[15px]'>
            <div className="container mx-auto font-OpenSans">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                    <div className='col-span-1'>
                        <img className='w-full' src={ achievements } alt="Achievements" />
                    </div>
                    <div className='col-span-1'>
                        <div className='space-y-5'>
                            <h2 className='text-3xl leading-8 font-bold text-body-text text-center sm:text-left'>ACHIEVEMENTS</h2>
                            {
                                achievementsData.map(item => (
                                    <div className='flex flex-col sm:flex-row text-center sm:text-left bg-white gap-3 shadow-3xl p-3 items-center' key={ item.id }>
                                        <img className='w-[90px] h-[75px]' src={ item.img } alt="gif img" />
                                        <div className='space-y-3'>
                                            <h2 className='text-base leading-6 text-ezze-theme font-bold'>{ item.title }</h2>
                                            <p className='text-base text-body-text font-normal'>{ item.description }</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;