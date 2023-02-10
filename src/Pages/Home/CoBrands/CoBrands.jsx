import React from 'react';
import dhakaLive from '../../../assets/images/brands/dhakalive.png'
import bazaar from '../../../assets/images/brands/itbazaar.png'
import techJobs from '../../../assets/images/brands/techjobs.com.bd.png'
import etlcampus from '../../../assets/images/brands/etlcampus.png'
import { Link } from 'react-router-dom';

const coBrandsData = [
    {
        id: 1,
        img: dhakaLive,
        link: 'http://dhakalive.tv/'
    },
    {
        id: 2,
        img: bazaar,
        link: 'https://itbazaar.com.bd/'
    },
    {
        id: 3,
        img: techJobs,
        link: 'http://techjobs.com.bd/'
    },
    {
        id: 4,
        img: etlcampus,
        link: '/'
    }
]

const CoBrands = () => {
    return (
        <section className='pb-[50px] md:pb-20 lg:pb-[100px] px-[15px]'>
            <div className="container mx-auto font-OpenSans">
                <h2 className='text-[#000248] text-2xl font-bold mb-10 relative heading_border'>Co - Brands</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] items-center'>
                    {
                        coBrandsData.map(brand => (
                            <div key={ brand.id }>
                                <Link to={ brand.link } className='cursor-pointer group'>
                                    <img className='mx-auto max-w-[200px] transition-all duration-300 scale-100 group-hover:scale-75' src={ brand.img } alt="" />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default CoBrands;