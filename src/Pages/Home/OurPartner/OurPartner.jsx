import React from 'react';
import bcc from '../../../assets/images/partner/bcc.png'
import narcotics from '../../../assets/images/partner/Narcotics-logo.png'
import bacco from '../../../assets/images/partner/bacco.png'
import ecab from '../../../assets/images/partner/e-cab.png'
import aamra from '../../../assets/images/partner/aamra.png'
import basis from '../../../assets/images/partner/basis-new.png'
import bicc from '../../../assets/images/partner/bicc.png'
import bsc from '../../../assets/images/partner/bcs.png'
import iccb from '../../../assets/images/partner/iccb.png'
import dcci from '../../../assets/images/partner/dcci_logo.png'
import panpacific from '../../../assets/images/partner/panpacific.png'
import radisson from '../../../assets/images/partner/radisson.png'
import gigabyte from '../../../assets/images/partner/gigabyte.png'
import lenovo from '../../../assets/images/partner/lenovo.png'
import samsung from '../../../assets/images/partner/samsung.png'

const ourPartnerData = [
    {
        id: 1,
        img: bcc,
    },
    {
        id: 2,
        img: narcotics,
    },
    {
        id: 3,
        img: bacco,
    },
    {
        id: 4,
        img: ecab,
    },
    {
        id: 5,
        img: aamra,
    },
    {
        id: 6,
        img: basis,
    },
    {
        id: 7,
        img: bicc,
    },
    {
        id: 8,
        img: bsc,
    },
    {
        id: 9,
        img: iccb,
    },
    {
        id: 10,
        img: dcci,
    },
    {
        id: 11,
        img: panpacific,
    },
    {
        id: 12,
        img: radisson,
    },
    {
        id: 13,
        img: gigabyte,
    },
    {
        id: 14,
        img: lenovo,
    },
    {
        id: 15,
        img: samsung,
    }
]

const OurPartner = () => {
    return (
        <section className='pb-10 px-[15px]'>
            <div className="container mx-auto font-OpenSans">
                <h2 className='text-[#000248] text-2xl font-bold mb-10 relative heading_border'>Our Partner</h2>
                <div className='grid items-center our_client_partner gap-2'>
                    {
                        ourPartnerData.map(partner => (
                            <div key={ partner.id } className='cursor-pointer group bg-slate-100 p-1'>
                                <img className='mx-auto max-w-[80px] sm:max-w-[100px] transition-all duration-300 scale-100 group-hover:scale-75' src={ partner.img } alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default OurPartner;