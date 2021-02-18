import Link from 'next/link'

export default function RequestDemo() {
    return (          
        <div className="w-full h-auto bg-green text-center space-y-10">
            <img
                src="/uponLogoCream.svg"
                alt="Upon Logo Cream"
                className="w-40 pt-20 mx-auto"
            />
            <p className="text-md font-light md:text-md text-cream px-6 md:px-4 lg:px-10">
                Do you have repeat vistors to your locations?
            </p>
            <div className="h-32">
                <Link
                    href={{
                        pathname:"/contact-us",
                        query: { service: "OTHER" }
                    }}
                    >
                    <a className="btn-cream text-lg hover:opacity-90">Request Demo</a>
                </Link>
            </div>
        </div>
    )
}
