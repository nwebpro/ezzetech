import React from 'react';
import { Link } from 'react-router-dom';
import mujib100 from '../../../assets/images/project/mujib100.png'
import bloodbank from '../../../assets/images/project/bloodbank.png'
import startup from '../../../assets/images/project/startup.png'
import eed from '../../../assets/images/project/eed.png'

const recenProject = [
    {
        id: 1,
        title: 'Parliament Mujib100',
        type: 'Web Application',
        image: mujib100,
        link: 'http://mujib100.parliament.gov.bd/'
    },
    {
        id: 2,
        title: 'Bloodbank LIVE',
        type: 'Mobile Application',
        image: bloodbank,
        link: 'https://bloodbank.live/'
    },
    {
        id: 3,
        title: 'startup bangladesh',
        type: 'Mobile Application',
        image: startup,
        link: 'https://play.google.com/store/apps/details?id=com.ezzetech.startupbangladesh'
    },
    {
        id: 4,
        title: 'Education building',
        type: 'Web Application',
        image: eed,
        link: 'https://ezze.dev/eed/'
    }
]

const RecentWork = () => {
    return (
        <section className='bg-ezze-theme py-[50px] md:py-20 lg;py-[100px] px-[15px] font-OpenSans'>
            <div className="container mx-auto">
                <h2 className='text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10 capitalize'>Take a look at our <br />recent project</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-10'>
                    {
                        recenProject.map(project => (
                            <div key={ project.id } className='cursor-pointer gap-5 bg-white flex flex-col lg:flex-row lg:items-center justify-between p-3 lg:p-[30px] group relative'>
                                <div className='order-2 lg:order-1'>
                                    <h2 className='text-2xl font-bold text-[#000248] capitalize mb-2'>{ project.title }</h2>
                                    <p className='text-body-text mb-5 lg:mb-10 font-semibold text-lg'>{ project.type }</p>
                                    <Link className='bg-ezze-theme font-bold text-base tracking-[.5px] border-2 border-ezze-theme transition-all duration-300 group-hover:bg-transparent scale-100 group-hover:scale-90 group-hover:text-ezze-theme px-8 py-3 inline-flex text-white z-10' to={ project.link } target='_blank'>See More</Link>
                                </div>
                                <div className='order-1 lg:order-2 h-[200px] w-full lg:w-[200px]'>
                                    <img className='w-full h-full object-cover scale-100 group-hover:scale-90 transition-all duration-300' src={ project.image } alt={ project.title } />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center'>
                    <Link to='/' className='scale-100 hover:scale-90  text-[#000248] text-center bg-white inline-flex px-8 py-3 font-bold font-base transition-all duration-300 hover:text-ezze-theme'>More Project</Link>
                </div>
            </div>
        </section>
    );
};

export default RecentWork;