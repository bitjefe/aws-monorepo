import Link from 'next/link'

export default function Arrival() {
    return (
        <div className="h-full">
            <div className="w-full py-10 mx-auto my-auto">
                <h4 className="text-green font-extralight text-4xl text-center">
                    How It Works
                </h4>
                <div className="flex flex-col md:flex-row my-20 text-center">
                    <div className="bg-green w-full md:w-1/3">
                        <h3 className="text-4xl text-white font-semibold py-8">Arrive</h3>
                        <img src="/uponStandUpMock.png" className="pb-10 h-64 lg:h-96 mx-auto my-auto"/>
                    </div>
                    <div className="bg-silver w-full md:w-1/3">
                        <h3 className="text-4xl text-green font-semibold py-8">Scan</h3>
                        <img src="/scanQR.png" className="h-64 lg:h-96 mx-auto my-auto"/>
                    </div>
                    <div className="bg-white w-full md:w-1/3">
                        <h3 className="text-4xl text-green font-semibold py-8">Greet</h3>
                        <img src="/productThreeFan.png" className=" pb-10 h-64 lg:h-96 mx-auto my-auto"/>
                    </div>
                </div>
                <div className="my-10 text-center">
                    <Link href="/product">
                        <a className="btn-green-spec-lg text-xl hover:bg-white hover:text-green">Learn More</a>
                    </Link>
                </div>
            </div>
        </div>
    )
};