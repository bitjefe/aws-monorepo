import { useEffect } from 'react';

import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";

import Nav from '../components/nav'
import Landing from '../components/landing'
import DigitalGreetings from '../components/digitalGreetings'
import VisitorExperience from '../components/visitorExperience'
import HowItWorks from '../components/howItWorks'
import PWA from '../components/pwa'
import Museum from '../components/museum'
import RequestDemo from '../components/requestDemo'
import Footer from '../components/footer'

export default function IndexPage() {
    return (
        <div>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Whyte-Extralight.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
            </Head>
            <div className="flex flex-col h-screen">
                <header className="z-20 bg-green w-full fixed pb-4 px-4 sm:px-6 md:px-8 text-lg font-medium">
                    <Nav />
                </header>
                <main className="mt-20">
                    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
                        <div className="space-y-20 sm:space-y-32">
                            <Landing />
                            <VisitorExperience />
                        </div>
                        <HowItWorks />
                        <PWA />
                        <Museum />
                        <DigitalGreetings />
                    </div>
                    <RequestDemo />
                    <Footer />
                </main>
            </div>
        </div>
    )
}
