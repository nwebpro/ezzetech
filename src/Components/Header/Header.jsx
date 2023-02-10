import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const navitemData = [
    {
        id: 1,
        title: 'Portfolio',
        link: '/'
    },
    {
        id: 2,
        title: 'About Us',
        link: '/'
    },
    {
        id: 3,
        title: 'Press',
        link: '/'
    },
    {
        id: 4,
        title: 'Career',
        link: '/'
    },
    {
        id: 5,
        title: 'Contact',
        link: '/'
    }
]

const Header = () => {
    const [nav, setNav] = useState(false)
    const [navColor, setNavColor] = useState('transparent')
    const [navShadow, setNavShadow] = useState('none')

    const handleNavbar = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setNavColor('#fff')
                setNavShadow('0 8px 20px 0 rgb(0 0 0 / 10%)')
            } else {
                setNavColor('transparent')
                setNavShadow('none')
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <header style={{ backgroundColor: `${ navColor }`, boxShadow: `${navShadow}` }} className={`fixed left-0 top-0 w-full z-10 ease-in duration-300`}>
            <nav className='container mx-auto flex justify-between items-center py-2 px-[15px]'>
                <div>
                    <Link to=''>
                        <img className='w-[130px] sm:max-w-[140px]' src={ logo } alt="Logo" />
                    </Link>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-6'>
                        {
                            navitemData.map(item => (
                                <li key={ item.id } className='text-[#3C3C3C] font-bold text-base hover:text-ezze-theme transition-colors duration-300'>
                                    <Link to={ item.link }>{ item.title }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Mobile Button */}
                <div className='block lg:hidden'>
                    <HiBars3 className='text-2xl cursor-pointer hover:text-ezze-theme transition-colors duration-300' onClick={handleNavbar} />
                </div>
                <div className={`absolute top-0 w-[280px] p-10 ${nav ? 'right-0' : 'right-[-100%]'} bottom-0 bg-ezze-theme h-screen ease-in duration-500`}>
                    <HiXMark onClick={handleNavbar} className='text-white text-2xl cursor-pointer hover:text-body-text transition-colors duration-300 mb-10 rotate-0 hover:rotate-90' />
                    <ul className='flex flex-col gap-3'>
                        {
                            navitemData.map(item => (
                                <li key={ item.id } className='text-white font-bold text-xl hover:text-body-text transition-colors duration-300'>
                                    <Link to={ item.link }>{ item.title }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;