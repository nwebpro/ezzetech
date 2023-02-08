import React from 'react';
import { Link } from 'react-router-dom';
import FooterBg from '../SvgIcon/FooterBg';
import { TfiAngleRight } from 'react-icons/tfi'

const companyData = [
    {
        id: 1,
        path: 'About'
    },
    {
        id: 2,
        path: 'Careers'
    },
    {
        id: 3,
        path: 'Services'
    },
    {
        id: 4,
        path: 'Terms & Service'
    },
    {
        id: 5,
        path: 'Quality Policy'
    },
    {
        id: 6,
        path: 'Contact Us'
    }
]
const followData = [
    {
        id: 1,
        path: 'ETL Blog'
    },
    {
        id: 2,
        path: 'Linkedin'
    },
    {
        id: 3,
        path: 'Facebook'
    },
    {
        id: 4,
        path: 'Twitter'
    },
    {
        id: 5,
        path: 'Google Plus'
    },
    {
        id: 6,
        path: 'Youtube'
    }
]

const Footer = () => {
    return (
        <footer className='bg-footer-bg bg-cover bg-no-repeat bg-scroll bg-center relative overflow-hidden font-OpenSans px-[15px]'>
            <div className="text-white">
                <div className='ezze_mountain_footer'>
                    <FooterBg />
                </div>
                <div className="container mx-auto pt-[160px] lg:pt-[98px] pb-[15px]">
                    <div className='h-[110px]' />
                    <div className="grid grid-cols-12">
                        <div className='col-span-12 lg:col-span-6 mb-5 lg:mb-0'>
                            <h2 className='ezze_footer_heading'>Address</h2>
                            <div className='space-y-3'>
                                <p className='ezze_footer_p'><span className='font-bold'>Corporate Office:</span> 49, Vision 2021 Tower-1, STP (Level 7), <br />Kawran Bazar, Dhaka-1215.</p>
                                <p className='ezze_footer_p'><span className='font-bold'>Phone:</span> +88 0244810014</p>
                                <p className='ezze_footer_p'><span className='font-bold'>Email:</span> founders@etl.com.bd</p>
                                <p className='ezze_footer_p'><span className='font-bold'>Web:</span> www.etl.com.bd</p>
                            </div>
                        </div>
                        <div className='col-span-6 lg:col-span-3'>
                            <h2 className='ezze_footer_heading'>Company</h2>
                            {
                                companyData.map(item => (
                                    <div key={ item.id }>
                                        <Link to='/' className='flex items-center gap-1 mb-3'>
                                            <TfiAngleRight className='text-xs' />
                                            { item.path }
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='col-span-6 lg:col-span-3'>
                            <h2 className='ezze_footer_heading'>FOLLOW</h2>
                            {
                                followData.map(item => (
                                    <div key={ item.id }>
                                        <Link to='/' className='flex items-center gap-1 mb-3'>
                                            <TfiAngleRight className='text-xs' />
                                            { item.path }
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='text-center mt-[60px] pt-5 pb-2 border-t'>
                        <p className='text-xs leading-5 uppercase'>Copyright 2023 Ezze Technology Ltd. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;