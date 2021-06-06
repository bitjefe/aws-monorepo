import Link from 'next/link'

const headerInfo = [
  { title: "Modern", message:"Modernize your visitor experience for mobile - native generation" },
  { title: "Authentic", message:"Meet your visitors direct and with a digital greeting" },
  { title: "Unique", message:"Experiential marketing leads to lasting impressions" },
]

export default function HowItWorks() {
    return (
        <div>
            <div className="flex flex-wrap text-center text-green items-start max-w-screen-md px-4 lg:px-8 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
            {headerInfo.map((item) => 
                <div className="w-1/3 px-4">
                    <p className="text-2xl md:text-3xl">
                        {item.title}
                    </p>
                    <p className="text-xs md:text-sm pt-1">
                        {item.message}
                    </p>
                </div>
            )}
            </div>
            <div className="text-green max-w-screen-md pt-12 px-4 lg:px-8 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
                <div className="bg-silver w-full rounded-xl">
                    <h4 className="font-medium text-lg md:text-2xl text-center pt-2">
                        How does it work?
                    </h4>
                    <div className="flex flex-row items-center text-center pt-2">
                        <div className="bg-white w-1/3 mx-4 rounded-xl">
                            <img src={"howItWorks/going.png"} className="-mt-12 md:-mt-10 h-36 md:h-56 mx-auto my-auto" />
                            Going
                        </div>
                        <div className="bg-white w-1/3 mx-4 rounded-xl">
                            <img src={"howItWorks/arriving.png"} className="h-24 md:h-48 mx-auto my-auto" />
                            Arriving
                        </div>
                        <div className="bg-white w-1/3 mx-4 rounded-xl">
                            <img src={"howItWorks/returning.png"} className="md:-ml-4 h-24 pt-2 md:pt-0 md:h-48" />
                            Returning
                        </div>
                    </div>
                    <p className="font-medium text-xs md:text-sm text-center px-4 md:px-20 py-3">
                        Upon's progressive web app is built for the full lifecycle of your visitor's experience
                        and available to be accessed without downloading via email, text, QR, NFC tags.
                    </p>
                </div>
            </div>
        </div>
    )
}