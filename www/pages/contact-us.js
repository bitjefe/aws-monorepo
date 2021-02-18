import Link from 'next/link'
import Nav from "../components/nav";
import ContactForm from "../components/contactForm";

export default function ContactUs() {
    return (
        <div className="h-full md:h-screen bg-gradient-brand">
            <div className="px-4 pt-2 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-40">
                <Link href="/">
                    <a className="hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg 
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
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
            <div className="flex flex-col lg:flex-row text-gray-900">
                <div className="w-full lg:w-1/3 md:my-auto">
                    <h1 className="pt-10 mx-4 leading-tight text-5xl text-center lg:text-right font-bold">
                        Contact Upon
                    </h1>
                    <p className="text-center mx-4 lg:text-right my-auto">
                        Submit this form and we'll reach out shortly
                    </p>
                </div>
                <div className="flex w-full lg:w-2/3 justify-center mb-20">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
};