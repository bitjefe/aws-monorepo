import Link from 'next/link'
import { useState, useRef } from "react";
import { useRouter } from 'next/router'
import { Player } from '@lottiefiles/react-lottie-player'

export default function UseCase() {
    const playerRef = useRef()
    const router = useRouter();
    const { pathname, query } = router;
    
    let title = "";
    let subDesc = ""
    let solution = ""
    let impact = ""
    let lottieFile = ""
    
    if (pathname) {
        switch (pathname) {
            case "/greetings":
                title = "Digital Greetings";
                subDesc = "Welcome all your guests with a personalized message"
                solution = "Upload videos to modernize the arrival experience"
                impact = "First impressions last, studies show you are 2x more likely to recommend later based on the first 2 minutes of an experience"
                lottieFile = "/lottie-greetings.json"
                break;
            case "/services":
                title = "Connect Services";
                subDesc = "Link your guest resources into a central location to convert digital interaction into action"
                solution = "In-app landing page for associated links to connect guests to multiple sites"
                impact = "Lifts to your digital ecosystem and easier access points for guests without having to download additional apps"
                lottieFile = "/lottie-services.json"
                break;
            case "/visits":
                title = "Customized Visits";
                subDesc = "Modernize your arrival experience with an easy to build phone app"
                solution = "Web-app builder that converts a QR scan into a  phone app experience that guests can pin to their phones for short-term use"
                impact = "Offer a bridge between app store download & website only formatting for improved in-person experiences"
                lottieFile = "/lottie-visits.json"
                break;
            default:
                router.push("/")
        }
    }
    
  
    return (
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center text-center px-3 pt-32">
                <div className="flex-1">
                    <h4 className="leading-tight text-4xl lg:text-5xl font-bold">
                        {subDesc}
                    </h4>
                </div>
                <div className="flex-1">
                    <Player
                        ref={playerRef}
                        autoplay={true}
                        loop={true}
                        src={lottieFile}
                        style={{width:"450px", height:"300px"}}
                    ></Player>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-x-4 items-center text-center">
                <div className="w-full py-8 px-6 md:px-4 md:w-1/2">
                    <p className="leading-tight text-xl md:text-2xl font-bold">
                        {solution}
                    </p>
                </div>
                <div className="w-full py-8 px-6 md:px-4 md:w-1/2 md:py-16">
                    <p className="leading-tight text-xl md:text-2xl font-bold">
                        {impact}
                    </p>
                </div>
            </div>
        </div>
    )
};