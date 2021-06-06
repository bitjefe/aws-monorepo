import Image from 'next/image'
import Link from 'next/link'

export default function Landing() {
    return (     
        <div className="opacity-80 flex flex-wrap text-left items-center py-8 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <div className="w-full md:w-1/3 lg:w-1/2 mb-4 text-center md:text-left pl-6 lg:pl-12">
                <h1 className="pt-2 pb-4 text-3xl md:text-2xl lg:text-3xl text-green">
                    Make Every Visit <br/>
                    Experiential
                </h1>
                <p className="pb-8 text-base md:text-sm lg:text-base text-green mx-8 md:mx-0 md:pr-0 lg:pr-32 xl:pr-48">
                    Upon's arrival app helps your space become built for the mobile age.
                </p>
                <Link
                    href="https://host.tryupon.com/"
                    >
                    <a className="btn-green-spec-sm">Get Started</a>
                </Link>
            </div>
            <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 md:-mt-20 lg:-mt-32 mx-auto">
                <Image
                    src="/welcomeToUpon.png"
                    alt="App Images"
                    width={2004}
                    height={2004}
                    unoptimized={true}
                />
            </div>
        </div>
    )
}


