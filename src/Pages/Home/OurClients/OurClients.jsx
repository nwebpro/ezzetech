import React from 'react';
import ictdivision from '../../../assets/images/clients/ictdivision-logo.png'
import lict from '../../../assets/images/clients/lict-logo.png'
import power from '../../../assets/images/clients/powar-minstry.png'
import hitech from '../../../assets/images/clients/hi-tech.png'
import btcl from '../../../assets/images/clients/btcl.png'
import southcity from '../../../assets/images/clients/south-city.png'
import a2i from '../../../assets/images/clients/a2i.png'
import ipdc from '../../../assets/images/clients/IPDC-logo.png'
import prothomalo from '../../../assets/images/clients/prothom-alo.png'
import brac from '../../../assets/images/clients/brac.png'
import gaanbangla from '../../../assets/images/clients/gaan-bangla.png'
import dailystar from '../../../assets/images/clients/daily-star.png'
import beatnik from '../../../assets/images/clients/beatnik.png'
import grea from '../../../assets/images/clients/grey.png'
import netg5 from '../../../assets/images/clients/netg5.png'
import kcargo from '../../../assets/images/clients/kcargo-logo.png'

const ourClientsData = [
    {
        id: 1,
        img: ictdivision,
    },
    {
        id: 2,
        img: lict,
    },
    {
        id: 3,
        img: power,
    },
    {
        id: 4,
        img: hitech,
    },
    {
        id: 5,
        img: btcl,
    },
    {
        id: 6,
        img: southcity,
    },
    {
        id: 7,
        img: a2i,
    },
    {
        id: 8,
        img: ipdc,
    },
    {
        id: 9,
        img: prothomalo,
    },
    {
        id: 10,
        img: brac,
    },
    {
        id: 11,
        img: gaanbangla,
    },
    {
        id: 12,
        img: dailystar,
    },
    {
        id: 13,
        img: beatnik,
    },
    {
        id: 14,
        img: grea,
    },
    {
        id: 15,
        img: netg5,
    },
    {
        id: 16,
        img: kcargo,
    }
]

const OurClients = () => {
    return (
        <section className='pb-10 px-[15px]'>
            <div className="container mx-auto font-OpenSans">
                <h2 className='text-[#000248] text-2xl font-bold mb-10 relative heading_border'>Our Clients</h2>
                <div className='grid items-center our_client_partner gap-2'>
                    {
                        ourClientsData.map(client => (
                            <div key={ client.id } className='cursor-pointer group bg-slate-100 p-1'>
                                <img className='mx-auto max-w-[80px] sm:max-w-[100px] transition-all duration-300 scale-100 group-hover:scale-75' src={ client.img } alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default OurClients;