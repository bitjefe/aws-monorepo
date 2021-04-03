import Link from 'next/link'

export default function HowItWorks() {
    return (          
        <div className="w-full h-auto bg-gradient-brand">
            <div className="container mx-auto lg:px-6 py-8 lg:px-10 lg:px-12">
                <a name="threeStepsToHost"/>
                <p className="text-4xl text-center text-green pt-20 pb-10 font-extralight">
                    3 Steps to Host
                </p>
                <div className="flex bg-green rounded-t-lg lg:rounded-lg lg:py-10">
                    <div className="flex-1 text-cream px-4 py-2 m-0 rounded-lg space-y-8 lg:space-y-12">
                        <div className="hidden lg:flex items-center">
                            <div className="contents">
                                <div className="w-6/12 px-4 py-2 m-2">
                                    <div className="w-1/12 text-5xl text-cream text-center mx-auto mb-4 border-b-2 border-yellow-300">
                                        1
                                    </div>
                                    <p className="font-semibold text-2xl lg:text-3xl pb-6">
                                        Create Your Host Profile
                                    </p>
                                    <p className="text-lg text-justify">
                                        Use Upon's builder to create your greeting app.
                                        Host a welcome video, link resources & embed
                                        on-site offerings.
                                    </p>
                                </div>
                                <div className="w-6/12 mx-auto px-2 rounded-full flex items-center justify-center">
                                    <img src="/createProfile.svg" className="mx-auto h-56"/>
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden items-center">
                            <div className="contents">
                                <div className="py-2 m-2 text-center">
                                    <div className="w-1/12 text-5xl text-cream mx-auto mb-4 border-b-2 border-yellow-300">
                                        1
                                    </div>
                                    <p className="font-semibold text-2xl lg:text-3xl">
                                        Create Your Host Profile
                                    </p>
                                    <p className="text-lg px-0 py-6">
                                        Use Upon's builder to create your greeting app.
                                        Host a welcome video, link resources & embed
                                        on-site offerings.
                                    </p>
                                </div>
                                <div className="text-cream text-center px-4 py-2">
                                    <img src="/createProfile.svg" className="mx-auto h-56"/>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:flex-row lg:flex-row-reverse items-center">
                            <div className="contents">
                                <div className="w-6/12 px-4 py-2 m-2">
                                    <div className="w-1/12 text-5xl text-green-400 text-center mx-auto mb-4 border-b-2 border-yellow-300">
                                        2
                                    </div>
                                    <p className="font-semibold text-2xl lg:text-3xl pb-6">
                                        Display the QR Greeting
                                    </p>
                                    <p className="text-lg text-justify">
                                        Start greeting your visitors! Popular locations are
                                        anywhere people check-in, arrive, or sit.
                                    </p>
                                </div>
                                <div className="w-6/12 mx-auto px-2 flex items-center justify-center">
                                    <img src="/arrivalDisplay.svg" className="mx-auto h-56"/>
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden items-center">
                            <div className="contents">
                                <div className="py-2 m-2 text-center">
                                    <div className="w-1/12 text-5xl text-green-400 mx-auto mb-4 border-b-2 border-yellow-300">
                                        2
                                    </div>
                                    <p className="font-semibold text-2xl lg:text-3xl">
                                        Display the QR Greeting
                                    </p>
                                    <p className="text-lg px-0 py-6">
                                        Start greeting your visitors! Popular locations are
                                        anywhere people check-in, arrive, or sit.
                                    </p>
                                </div>
                                <div className="text-center px-4 py-2">
                                    <img src="/arrivalDisplay.svg" className="mx-auto h-56"/>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex py-10 items-center">
                            <div className="contents">
                                <div className="w-6/12 px-4 py-2 m-2">
                                    <div className="w-1/12 text-5xl text-green-400 text-center mx-auto mb-4 border-b-2 border-yellow-300">
                                        3
                                    </div>
                                    <p className="font-semibold text-2xl lg:text-3xl pb-4">
                                        Track Visitor Metrics
                                    </p>
                                    <p className="text-justify">
                                        See views to your media, clicks into your linked
                                        resources & conversions into your on-site recommendations.
                                    </p>
                                </div>
                                <div className="w-6/12 mx-auto px-2 rounded-full flex items-center justify-center">
                                    <img src="/secureData.svg" className="mx-auto h-56"/>
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden py-4 items-center">
                            <div className="contents">
                                <div className="py-2 m-2 text-center">
                                    <div className="w-1/12 text-5xl text-green-400 mx-auto mb-4 border-b-2 border-yellow-300">
                                        3
                                    </div>
                                    <p className="font-semibold text-2xl lg:text-3xl pb-4">
                                        Track Visitor Metrics
                                    </p>
                                    <p className="text-lg px-0 py-6">
                                        See views to your media, clicks into your linked
                                        resources & conversions into your on-site recommendations.
                                    </p>
                                </div>
                                <div className="text-center px-4 py-2">
                                    <img src="/secureData.svg" className="mx-auto h-56"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-20 text-center">
                    <Link href="https://host.tryupon.com/">
                        <a className="btn-cream-lg text-xl hover:bg-green hover:text-white">Try Upon</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}