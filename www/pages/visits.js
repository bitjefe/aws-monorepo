import Link from 'next/link'
import UseCase from '../components/useCase'

export default function Visits() {
    return (
        <div className="h-full">
            <div className="z-10 bg-green w-full fixed py-3 px-4 sm:px-6 md:px-8 text-lg font-semibold shadow-2xl">
                <Link href="/">
                    <a className="btn-transparent font-medium py-3 px-4 rounded inline-flex items-center">
                        <svg 
                            className="w-6 h-6"
                            fill="none"
                            stroke="white"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                            />
                        </svg>
                        <span></span>
                    </a>
                </Link>
            </div>
            <div className="flex flex-wrap max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
                <UseCase />
            </div>
        </div>
    )
};