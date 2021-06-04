import Link from 'next/link'

export default function PWA() {
    return (
        <div>
            <div className="text-green max-w-screen-md pt-12 px-4 md:px-24 mx-auto">
                <h4 className="text-blue-400 font-semibold text-sm text-center">
                    Progressive Web App
                </h4>
                <h5 className="text-lg md:text-2xl text-center py-4">
                    A Reliable & Fast PWA to Increase
                    <br />
                    Mobile Conversion
                </h5>
                <img src={"app/pwa.png"} className="h-48 md:h-72 mx-auto my-auto" />
                <h5 className="text-lg md:text-2xl text-center py-4">
                    Where we focus
                </h5>
                <p className="font-medium text-xs md:text-sm text-center px-4 md:px-20 py-3">
                    Core features are built for hosts with frequent in-person visitors who
                    arrive via tickets or signups
                </p>
                <div className="flex flex-row items-center text-center pt-2 border-b-8 border-lightGreen">
                    <div className="w-1/4">
                        venues
                    </div>
                    <div className="w-2/4 mx-auto">
                        event grounds
                    </div>
                    <div className="w-1/4 mx-auto">
                        museums
                    </div>
                </div>
            </div>
        </div>
    )
}