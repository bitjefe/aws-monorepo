import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-white bg-accent-1 border-t border-accent-2">
            <div className="container mx-auto px-5">
                <div className="py-20 flex flex-col md:flex-row items-center">
                    <h3 className="text-green text-3xl md:text-4xl text-center md:text-left mb-10 md:mb-0 md:pr-4 md:w-1/2">
                        Upon @2021
                    </h3>
                    <div className="flex flex-row justify-end items-center md:pl-4 md:w-1/2">
                        <Link
                            href={{
                                pathname:"/contact-us",
                                query: { service: "OTHER" }
                            }}
                            >
                            <a className="mx-3 btn-green-spec">
                                Partnerships
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="mx-3 btn-green-spec bg-white text-green hover:bg-green hover:text-white">
                                Press
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}