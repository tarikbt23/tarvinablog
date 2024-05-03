import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header >
        <div className='bg-slate-500 py-1 md:py-3 lg:py-5 text-gray-200'>
            {/* headercontainer */}
            <div className='container flex items-center justify-between space-x-8 md:space-x-12 lg:space-x-16'>
                {/* Logo */}
                <Link 
                href = 'https://www.linkedin.com/in/tarvina-yaz%C4%B1l%C4%B1m-teknoloji-5334b72b8?originalSubdomain=tr' 
                target='_blank'
                className='bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-gray-100 text-xl md:text-5xl lg:text-6xl font-bold pl-4'
                >
                    TARVİNA
                </Link>
                
                {/* Mobile Menu */}
                <div className='block md:hidden pr-4'>
                    <div className='space-y-1 cursor-pointer'>
                        <div className='bg-black w-8 h-1 rounded-full'></div>
                        <div className='bg-black w-8 h-1 rounded-full'></div>
                        <div className='bg-black w-8 h-1 rounded-full'></div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className='hidden md:flex justify-between flex-1'>
                    {/* Menu */}
                    <div className='flex  items-center  space-x-4 md:space-x-6 lg:space-x-8 whitespace-nowrap group text-xl'>
                        <Link href='/' className='hover:text-orange-300 transition duration-300'>Main Page</Link>
                        <Link href='' className='hover:text-orange-300 transition duration-300'>About</Link>
                        <Link href='' className='hover:text-orange-300 transition duration-300'>Contact</Link>
                        <Link href='' className='hover:text-orange-300 transition duration-300'>Social</Link>
                    </div>
                    
                    {/* Social Accounts */}
                    <div className='hidden md:flex items-center justify-end'>
                        <div className='px-4 mx-4 py-1 text-4xl '>
                            <div className='flex flex-row space-x-6'>
                                <FaInstagram className='hover:text-pink-400 transition duration-300'/>
                                <FaTwitter className='hover:text-blue-400 transition duration-300'/>
                                <FaLinkedin className='hover:text-blue-500 transition duration-300'/>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
