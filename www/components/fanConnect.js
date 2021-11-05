import React, { useState } from 'react'
import Link from 'next/link'

export default function FanConnect() {
    return (
        <div className="h-full bg-cream">
            <div className="text-green flex flex-wrap max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
                <div className="block lg:hidden items-center">
                    <div className="flex flex-row">
                        <div className="py-2 m-2 text-center">
                            <p className="font-medium text-3xl md:text-4xl">
                                Connect to your fans
                            </p>
                            <p className="text-base px-4 md:px-16 pt-6">
                                Centralize and link to your digital ecosystem to increase
                                conversion of in-person visits to online followers
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-1/2 text-center px-4 py-2">
                            <img src="/app/linktree.png" className="-mb-16 md:-mb-24 mx-auto h-56 md:h-96"/>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <img src="/characters/painterFemale.png" className="mx-auto h-36 md:h-48"/>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex py-10 ">
                    <div className="flex items-center w-6/12 px-4 py-2">
                        <div>
                            <p className="w-full font-medium text-3xl md:text-4xl pb-4">
                                Connect to your fans
                            </p>
                            <p className="w-full text-base pr-8 pb-4">
                                Centralize and link to your digital ecosystem to increase
                                conversion of in-person visits to online followers
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-3/12 px-2">
                        <img src="/app/linktree.png" className="-my-24 h-96"/>
                    </div>
                    <div className="flex items-start justify-end w-3/12 px-2">
                        <img src="/characters/painterFemale.png" className="-my-12 h-48"/>
                    </div>
                </div>
            </div>
        </div>
    )
};