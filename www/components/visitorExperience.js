import React, { useState } from 'react'
import Link from 'next/link'

const appInfo = [
    { 
      id: "Welcome",
      title: "Personalized Arrivals",
      message: "Make every soon-to-be or current visitor feel like a VIP through video greetings",
      imageUrl: "app/welcome.png",
    },
    { 
      id: "Experiences",
      title: "Events Marketplace",
      message: "Sign-up for your organization's community causes or book scheduled events",
      imageUrl: "app/experiences.png",
    },
    { 
      id: "Deals",
      title: "In-Person Benefits",
      message: "Custom product offerings or membership sign-up opportunities",
      imageUrl: "app/deals.png",
    },
]


export default function VisitorExperience() {
    const [imageIs, setImageIs] = useState("app/welcome.png");
    
    return (
        <div className="h-full">
            <div className="w-full py-10 mx-auto my-auto">
                <h3 className="mb-3 text-green font-extralight text-lg text-center">
                    the app
                </h3>
                <h4 className="text-green font-extralight text-3xl text-center px-4">
                    Visitor Experience Platform
                </h4>
                <div className="flex flex-row items-center my-20 mx-4 md:mx-20">
                    <div className="flex flex-col items-center w-2/3">
                    {appInfo.map((page) =>
                        <div
                            className="flex group w-full my-2"
                            onClick={() => setImageIs(page.imageUrl)}
                            >
                            <div className="flex items-center bg-white w-1/3 rounded-xl border border-gray-500 z-10 hover:shadow-lg">
                                <p className="w-full text-center text-xs md:text-sm group-hover:text-gray-900 text-gray-500">
                                    {page.id}
                                </p>
                            </div>
                            <div className="items-center bg-blue-300 w-2/3 group-hover:text-gray-900 text-gray-500 text-left -ml-2 px-4 py-1 hover:shadow-lg">
                                <p className="text-sm md:text-xl font-semibold">
                                    {page.title}
                                </p>
                                <p className="text-xs md:text-sm">
                                    {page.message}
                                </p>
                            </div>
                        </div>
                    )}
                    </div>
                    <div className="flex content-center w-1/3">
                        <img src={imageIs} className="h-72 lg:h-96 mx-auto my-auto"/>
                    </div>
                </div>
            </div>
        </div>
    )
};