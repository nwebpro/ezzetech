import React from 'react';
import Marketing from '../../../Components/SvgIcon/Marketing';
import Mobile from '../../../Components/SvgIcon/Mobile';
import WebDev from '../../../Components/SvgIcon/WebDev';

const serviceData = [
    {
        id: 1,
        icon: <WebDev />,
        title: 'Web Development',
        desc: 'Ezze Technology Ltd. offers web solutions which tend to be effective tools of marketing and ensure return on investments. We are devoted to give our customers affordable and custom based packages which surpass the expectation of the clientele.'
    },
    {
        id: 2,
        icon: <Mobile />,
        title: 'Apps Developmen',
        desc: 'Ezze Technology Ltd. provides wide assortment of services for mobile applications and developments which makes the transition of your company into the online world as smooth as possible. Our professional team constantly hones their skill to ensure that your company stays ahead in this competitive world.'
    },
    {
        id: 3,
        icon: <Marketing />,
        title: 'Digital Marketing',
        desc: 'Digital Marketing is driving the society to a phase which creates new ways of thinking, interrelationships and global awareness. We are trying to provide out of the box solutions which can help to find lasting and hi-impact solutions to marketing issue.'
    },
    {
        id: 4,
        icon: <WebDev />,
        title: 'Domain & Hosting',
        desc: 'Ezze Technology Ltd. realizes that now a day’s everyone needs an online presence, regardless of their line of business or technical expertise. With an authoritative and straightforward way to hosting solution, we are able to cover everyone’s need and requirements.'
    },
    {
        id: 5,
        icon: <Mobile />,
        title: 'Live Streming',
        desc: 'Live Streaming video is content that sent in compressed form over the Internet and displayed by the viewer in real time. We ensure video streaming platform which allows customers to live their video content in a seamless way.'
    },
    {
        id: 6,
        icon: <Marketing />,
        title: 'E-Business Solution',
        desc: 'Ezze Technology Ltd. brings a package program that lets you build, customize, and run an online store. We will walk you through the entire process: hosting, design, pricing and payment options, marketing tools and reports.'
    }
]

const WhatWeDo = () => {
    return (
        <section className='bg-[#F9F9F9] py-[50px] md:py-20 lg:py-[100px] font-OpenSans px-[15px]'>
            <div className="container mx-auto">
                <h2 className='text-center text-3xl font-bold mb-10 text-body-text'>WHAT <span className='text-ezze-theme'>WE DO</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
                    {
                        serviceData.map(service => (
                            <div className='service_box_wrapper group' key={ service.id }>
                                <div className='service_icon group-hover:bg-ezze-theme group-hover:text-white'>
                                    <span className='flex w-[30px] h-[30px] mx-auto justify-center items-center'>{ service.icon }</span>
                                </div>
                                <h2 className='service_title'>{ service.title }</h2>
                                <p className='service_desc'>{ service.desc }</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;