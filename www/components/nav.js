import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import Menu from './menu'

const useCases = [
    { href: '/greetings', label: 'Digital Greetings'},
    { href: '/services', label: 'Connect Services' },
    { href: '/visits', label: 'Customized Visits' },
]

const leftLinks = [
    { href: '#threeStepsToHost', label: 'Host'},
    { href: '/product', label: 'Product' },
]

const rightLinks = [
    { href: 'https://host.tryupon.com/', label: 'Join Waitlist' },
]

export default function Nav() {
    const [showMenu, setShowMenu] = useState("");
    
    let smallMenu = [];
    
    if (showMenu) {
        smallMenu.push(<Menu />)
    }
    
    return (
        <nav>
            <ul className="flex mx-auto items-center justify-center pt-6 text-base max-w-screen-xl">
                <ul className="flex items-center justify-between mr-4 space-x-4">
                    <li key={`landing-upon`}>
                        <img
                            onClick={() => window.scrollTo(0,0)}
                            src="/uLogoWhite.svg"
                            className="cursor-pointer h-8 w-8"
                        />
                    </li>
                </ul>
                <ul className="hidden md:flex md:w-full md:space-x-4">
                    <li>
                        <div className="relative group text-white">
                            <button className="px-4 font-bold text-left bg-transparent focus:outline-none">
                                <span>Use Cases</span>
                            </button>
                            <div className="absolute z-10 hidden bg-green group-hover:flex">
                                <div className="text-left px-4 mt-4 pt-2 pb-8 bg-white rounded-sm shadow-2xl w-36">
                                    <div className="grid grid-cols-1 gap-4">
                                        {useCases.map(({ href, label }) => (
                                            <div key={`${href}${label}`}>
                                                <Link href={href}>
                                                    <a className="px-0 no-underline btn-transparent text-green hover:text-black">
                                                        {label}
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {leftLinks.map(({ href, label }) => (
                        <li 
                            key={`${href}${label}`}
                            className="items-start"
                            >
                            <Link href={href}>
                                <a className="no-underline btn-transparent text-white">
                                    {label}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="hidden md:flex md:items-end md:space-x-4 md:w-1/3 md:justify-end">
                    {rightLinks.map(({ href, label }) => (
                        <li key={`${href}${label}`}
                            >
                            <Link href={href}>
                                <a className="no-underline btn-transparent text-white">
                                    {label}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="w-full flex justify-end md:hidden">
                    <li>
                        <div className="w-8 h-8" onClick={()=> setShowMenu(!showMenu)}>
                        {showMenu
                        ?   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        :   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        }
                        </div>
                    </li>
                </ul>
            </ul>
            {smallMenu}
        </nav>
    )
}
