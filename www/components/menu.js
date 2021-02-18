import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

const useCases = [
    { href: '/greetings', label: 'Digital Greetings'},
    { href: '/services', label: 'Connect Services' },
    { href: '/visits', label: 'Customized Visits' },
]

const rightLinks = [
    { href: '/product', label: 'Product' },
    { href: '/contact-us', label: 'Login' },
]

export default function Menu() {
    const [showUseCases, setShowUseCases] = useState(false);
  
    return (
        <div>
            <ul className="text-white visibile h-screen md:hidden border-t mt-3 pt-3 text-2xl">
                <li className="ml-10 py-2">
                    <button
                        className="font-bold text-left bg-transparent focus:outline-none hover:text-silver"
                        onClick={() => setShowUseCases(!showUseCases)}
                        >
                        <span>Use Cases</span>
                    </button>
                    {showUseCases
                    ?   useCases.map(({ href, label }) => (
                            <li key={`${href}${label}`} className="ml-8 py-2">
                                <Link href={href}>
                                    <a className="text-xl no-underline btn-transparent text-white hover:text-silver">
                                        {label}
                                    </a>
                                </Link>
                            </li>
                        ))
                    :  []
                    }
                </li>
                {rightLinks.map(({ href, label }) => (
                    <li key={`${href}${label}`} className="ml-10 py-2">
                        <Link href={href}>
                            <a className="pl-0 no-underline btn-transparent text-white">
                                {label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
