import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const classes = [
    { 
        id: "venues",
        activeClass: "w-1/3 border-b-8 hover:cursor-pointer border-blue-300",
        inactiveClass:"w-1/3 border-b-8 hover:cursor-pointer border-lightGreen"
    },
    {
        id: "eventGrounds",
        activeClass: "w-1/3 border-b-8 hover:cursor-pointer border-blue-300",
        inactiveClass:"w-1/3 border-b-8 hover:cursor-pointer border-lightGreen"
    },
    {
        id: "museums",
        activeClass: "w-1/3 border-b-8 hover:cursor-pointer border-blue-300",
        inactiveClass:"w-1/3 border-b-8 hover:cursor-pointer border-lightGreen"
    }
]

const venueTypes = [
    { 
        id: "venues",
        title: "Jumbotron in your Pocket",
        message: "Message from the owner or your favorite player, only-at-arena merchandise, & more. Find out how we help digitize your fan experience",
        imageUrl: "/characters/sportingEventFans.png"
    },
    {
        id: "eventGrounds",
        title: "Event Grounds",
        message: "Digital map, real-time schedules, custom video from stage or course to pocket as a memento, & more. Find out how we help make your event memorable",
        imageUrl: "/characters/musicEventFans.png"
    },
    {
        id: "museums",
        title: "Modernize the museum",
        message: "Video note from your curator, custom videos to purchase from the artists as mementos & more. Find out how we help bring the arts to life ",
        imageUrl: "/characters/museumTour.png"
    }
]

export default function Venue() {
    const [activeType, setActiveType] = useState("venues");
    
    let venueSelectClass;
    let egSelectClass;
    let museumSelectClass;
    
    classes.map((type) => {
        switch (type.id) {
            case "eventGrounds":
                activeType === "eventGrounds"
                ? egSelectClass = type.activeClass
                : egSelectClass = type.inactiveClass
                break;
            case "museums":
                activeType === "museums"
                ? museumSelectClass = type.activeClass
                : museumSelectClass = type.inactiveClass
                break;
            case "venues":
                activeType === "venues"
                ? venueSelectClass = type.activeClass
                : venueSelectClass = type.inactiveClass
                break;
        }
    })
    
    return (
        <div>
            <div className="text-green max-w-screen-md pt-12 px-4 md:px-24 mx-auto">
                <div className="flex flex-row items-center text-center pt-2 mb-16">
                    <div className={venueSelectClass} onClick={() => setActiveType("venues")}>
                        venues
                    </div>
                    <div className={egSelectClass} onClick={() => setActiveType("eventGrounds")}>
                        event grounds
                    </div>
                    <div className={museumSelectClass} onClick={() => setActiveType("museums")}>
                        museums
                    </div>
                </div>
            </div>
            {venueTypes.map((type) => {
                if (type.id === activeType) {
                    return (
                        <div className="flex flex-wrap text-left items-center max-w-screen-md md:px-4 lg:px-8 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
                            <div className="w-full md:w-1/2 text-center mb-4 md:mb-0 md:text-left">
                                <h4 className="text-blue-400 font-semibold text-sm text-center md:text-left">
                                    Engage with interaction
                                </h4>
                                <h5 className="pt-2 pb-4 text-3xl text-green">
                                    {type.title}
                                </h5>
                                <p className="pb-6 text-sm text-green mx-8 md:mx-0 md:pr-16 lg:pr-32 xl:pr-48">
                                    {type.message}
                                </p>
                                <Link
                                    href="https://host.tryupon.com/"
                                    >
                                    <a className="btn-green-spec-sm">Learn more</a>
                                </Link>
                            </div>
                            <div className="bg-cream rounded-full flex items-center content-center w-full mx-8 md:mx-0 md:w-1/2">
                                <img src={type.imageUrl} className="h-72 lg:h-96 mx-auto"/>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

