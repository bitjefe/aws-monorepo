import Link from 'next/link'

export default function DigitalGreetings() {
    return (
        <div className="h-full">
            <div className="text-green flex flex-wrap max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
                <div className="flex-1 py-2 rounded-lg">
                    <div className="block lg:hidden items-center">
                        <div className="contents">
                            <div className="py-2 m-2 text-center">
                                <p className="font-medium text-3xl md:text-4xl">
                                    Digital Greetings
                                </p>
                                <p className="text-xl px-0 py-6">
                                    Enhance your welcome experience with a short-term phone app
                                    that includes videos & recommendations
                                </p>
                            </div>
                            <div className="text-center px-4 py-2">
                                <img src="/greetingTiles.png" className="mx-auto h-56 md:h-96"/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex py-10 items-center">
                        <div className="contents">
                            <div className="w-6/12 px-4 py-2 m-2">
                                <p className="font-medium text-3xl md:text-4xl pb-4">
                                    Digital Greetings
                                </p>
                                <p className="text-xl pr-8">
                                    Enhance your welcome experience with a short-term phone app
                                    that includes videos & recommendations
                                </p>
                            </div>
                            <div className="w-6/12 mx-auto px-2 rounded-full flex items-center justify-center">
                                <img src="/greetingTiles.png" className="mx-auto h-96"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};