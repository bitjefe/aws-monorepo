import Image from 'next/image'
import Link from 'next/link'

export default function Landing() {
    return (     
        <div className="flex flex-wrap text-left items-center pt-16 max-w-screen-md md:px-4 lg:px-8 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <div className="w-full md:w-1/2 mb-4 text-center md:text-left">
                <h1 className="pt-2 pb-8 text-3xl text-green">
                    Make Every Visit <br/>
                    Experiential
                </h1>
                <p className="pb-10 text-lg text-green mx-8 md:mx-0 md:pr-16 lg:pr-32 xl:pr-48">
                    Upon's arrival app helps your space become built for the mobile age.
                </p>
                <Link
                    href="https://host.tryupon.com/"
                    >
                    <a className="btn-green-spec-sm">Get Started</a>
                </Link>
            </div>
            <div className="w-full md:w-1/2 my-auto mx-auto py-12 md:py-4 px-8 md:px-4 text-center">
                <Image
                    src="/welcomeToUpon.png"
                    alt="App Images"
                    width={1579}
                    height={1159}
                    unoptimized={true}
                />
            </div>
        </div>
    )
}


