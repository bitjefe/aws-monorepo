import Image from 'next/image'
import Link from 'next/link'

export default function Museum() {
    return (     
        <div className="flex flex-wrap text-left items-center max-w-screen-md md:px-4 lg:px-8 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <div className="w-full md:w-1/2 text-center mb-4 md:mb-0 md:text-left">
                <h4 className="text-blue-400 font-semibold text-sm text-center md:text-left">
                    Engage with interaction
                </h4>
                <h5 className="pt-2 pb-4 text-3xl text-green">
                    Modernize the musuem
                </h5>
                <p className="pb-6 text-sm text-green mx-8 md:mx-0 md:pr-16 lg:pr-32 xl:pr-48">
                    Video note from your curator, custom videos to purchase from the artists
                    as mementos & more. Find out how we help bring the arts to life
                </p>
                <Link
                    href="https://host.tryupon.com/"
                    >
                    <a className="btn-green-spec-sm">Learn more</a>
                </Link>
            </div>
            <div className="bg-cream rounded-full flex items-center content-center w-full mx-8 md:mx-0 md:w-1/2">
                <img src="/characters/museumTour.png" className="h-72 lg:h-96 mx-auto"/>
            </div>
        </div>
    )
}


