import { useEffect } from 'react';
import { useRouterScroll } from '@moxy/next-router-scroll';

import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";

import Nav from '../components/nav'
import Landing from '../components/landing'
import DigitalGreetings from '../components/digitalGreetings'
import Arrival from '../components/arrival'
import HowItWorks from '../components/howItWorks'
import RequestDemo from '../components/requestDemo'
import Footer from '../components/footer'

export default function IndexPage() {
    const { updateScroll } = useRouterScroll();

    useEffect(() => {
        updateScroll();
    }, []);

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
                <header className="z-10 bg-green w-full fixed pb-4 px-4 sm:px-6 md:px-8 text-lg font-semibold">
                    <Nav />
                </header>
                <main className="mt-20">
                    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
                        <div className="bg-gradient-brand-cream space-y-20 sm:space-y-32">
                            <Landing />
                            <Arrival />
                            <div className="bg-gradient-brand-invert-cream">
                                <DigitalGreetings />
                            </div>
                        </div>
                        <HowItWorks />
                    </div>
                    <RequestDemo />
                    <Footer />
                </main>
            </div>
        </div>
    )
}
