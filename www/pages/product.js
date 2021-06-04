import Link from 'next/link'
import RequestDemo from '../components/requestDemo'

export default function Product() {
    return (
        <div className="h-full bg-gradient-brand-lg">
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
                <h4 className="w-full pt-32 pb-20 leading-tight text-4xl md:text-5xl text-center font-medium">
                    Differentiate Your Welcome Experience
                </h4>
                <div className="flex-1 py-2 rounded-lg space-y-8 lg:space-y-12">
                    <div className="block lg:hidden items-center">
                        <div className="contents">
                            <div className="py-2 m-2 text-center">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    Touch-free, QR-based <br />
                                    Welcome Guides
                                </p>
                                <p className="text-lg px-0 py-6">
                                    Enrich visitors' walk-in experience with <br />
                                    Upon's Greeting App services
                                </p>
                            </div>
                            <div className="text-center px-4 py-2">
                                <img src="/welcomeGuides.png" className="mx-auto h-56 md:h-64"/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex py-10 items-center">
                        <div className="contents">
                            <div className="w-6/12 px-10 xl:px-20 py-2 m-2">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    Touch-free, QR-based <br/>
                                    Welcome Guides
                                </p>
                                <p className="text-lg xl:text-xl text-justify">
                                    Enrich visitors' walk-in experience with <br />
                                    Upon's Greeting App services
                                </p>
                            </div>
                            <div className="w-6/12 mx-auto px-2 rounded-full flex items-center justify-center">
                                <img src="/welcomeGuides.png" className="mx-auto h-96"/>
                            </div>
                        </div>
                    </div>
                    <div className="block lg:hidden py-4 items-center">
                        <div className="contents">
                            <div className="py-2 m-2 text-center">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    The Greeting App
                                </p>
                                <p className="text-lg px-0 py-6">
                                    Capture the moment your vistors arrive <br />
                                    and lift their first impression
                                </p>
                            </div>
                            <div className="text-center px-4 py-2">
                                <img src="/welcomeToUpon.png" className="mx-auto h-56 md:h-64"/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:flex-row lg:flex-row-reverse items-center">
                        <div className="contents">
                            <div className="w-6/12 px-10 xl:px-20 py-2 m-2">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    The Greeting App
                                </p>
                                <p className="text-lg xl:text-xl text-justify">
                                    Capture the moment your vistors arrive and 
                                    lift their first impression
                                </p>
                            </div>
                            <div className="w-6/12 mx-auto px-2 flex items-center justify-center">
                                <img src="/welcomeToUpon.png" className="mx-auto"/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex py-10 items-center">
                        <div className="contents">
                            <div className="w-6/12 px-4 py-2 m-2">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    Add a Warm Touch
                                </p>
                                <p className="text-lg xl:text-xl text-justify">
                                    Welcome your visitors with a greeting video <br />
                                    that updates them on what is new or what to expect
                                </p>
                            </div>
                            <div className="w-6/12 mx-auto px-2 rounded-full flex items-center justify-center">
                                <img src="/greetingTiles.png" className="mx-auto"/>
                            </div>
                        </div>
                    </div>
                    <div className="block lg:hidden py-4 items-center">
                        <div className="contents">
                            <div className="py-2 m-2 text-center">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    Add a Warm Touch
                                </p>
                                <p className="text-lg px-0 py-6">
                                    Welcome your visitors with a greeting <br />
                                    video that updates them on what is new or what to expect
                                </p>
                            </div>
                            <div className="text-center px-4 py-2">
                                <img src="/greetingTiles.png" className="mx-auto h-56 md:h-64"/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:flex-row lg:flex-row-reverse items-center">
                        <div className="contents">
                            <div className="w-6/12 px-10 xl:pl-20 xl:pr-10 py-2 m-2">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    Add Your Experiences & Goods
                                </p>
                                <p className="text-lg xl:text-xl text-justify">
                                    Allow your guests to see what you recommend & offer on-site
                                </p>
                            </div>
                            <div className="w-6/12 mx-auto px-2 rounded-full flex items-center justify-center">
                                <img src="/productThreeFan.png" className="mx-auto"/>
                            </div>
                        </div>
                    </div>
                    <div className="block lg:hidden py-4 items-center">
                        <div className="contents">
                            <div className="py-2 m-2 text-center">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    Add Your Experiences & Goods
                                </p>
                                <p className="text-lg px-0 py-6">
                                    Allow your guests to see what you <br />
                                    recommend & offer on-site
                                </p>
                            </div>
                            <div className="text-center px-4 py-2">
                                <img src="/productThreeFan.png" className="mx-auto h-56 md:h-64"/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex py-10 items-center">
                        <div className="contents">
                            <div className="w-6/12 px-4 py-2 m-2">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    Track Analytics
                                </p>
                                <p className="text-lg xl:text-xl text-justify">
                                    Track guest engagements. See what actions your guests
                                    take next & what recommendations they take you up on
                                </p>
                            </div>
                            <div className="w-6/12 mx-auto px-2 flex items-center justify-center">
                                <img src="/addToCart.svg" className="mx-auto h-80"/>
                            </div>
                        </div>
                    </div>
                    <div className="block lg:hidden py-4 items-center">
                        <div className="contents">
                            <div className="py-2 m-2 text-center">
                                <p className="font-semibold text-3xl xl:text-4xl pb-4">
                                    Track Analytics
                                </p>
                                <p className="text-lg px-0 py-6">
                                    Track guest engagements. <br />
                                    See what actions your guests take next & <br />
                                    what recommendations they take you up on
                                </p>
                            </div>
                            <div className="text-center px-4 py-2">
                                <img src="/addToCart.svg" className="mx-auto h-56 md:h-64"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto bg-green text-center mt-20 space-y-10">
                <RequestDemo />
            </div>
        </div>
    )
};