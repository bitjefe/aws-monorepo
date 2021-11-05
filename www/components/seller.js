import Image from 'next/image'
import Link from 'next/link'

export default function Seller() {
    return (          
        <div className="w-full h-auto">
            <p className="mx-auto px-6 pb-20 md:px-10 lg:px-12 text-4xl text-center text-green font-extralight">
                Upon Shop & Services
            </p>
            <div className="flex flex-col md:flex-row text-center">
              <div className="w-full md:w-1/2 h-auto">
                  <p className="h-24 text-2xl text-green font-medium">
                      List your local services or <br/>
                      crafted goods in Upon
                  </p>
                  <p className="h-24 text-lg text-green mb-10 px-6 md:px-4 lg:px-20 xl:px-40 2xl:px-56">
                      Upon connects guest's arrival check-in experience to locally sourced experiences & shops.
                      Promote your service or products in Upon today!
                  </p>
                  <div>
                      <img
                          src="/qrCodeCamera.png"
                          alt="QR Code"
                          className="h-64 my-4 mx-auto"
                      />
                  </div>
                  <div className="h-20 py-10">
                      <Link
                          href={{
                              pathname:"/contact-us",
                              query: { service: "SELL" }
                          }}
                          >
                          <a className="btn-green-spec-lg text-xl">Sell on Upon</a>
                      </Link>
                  </div>
              </div>
              <div className="w-full md:w-1/2 h-auto py-20 md:py-0">
                  <img
                      src="/productGroup.svg"
                      alt="Product Group"
                      className="my-8 mx-auto"
                      style={{height:"28rem"}}
                  />
                  <div className="h-20 py-10">
                      <a
                          href="https://framer.com/share/upon-web-apps--4PKgfzvPsSVQQycpNLC8/WXLgx51ZP"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-green-spec-lg text-xl"
                          >
                          See Example
                      </a>
                  </div>
              </div>
            </div>
        </div>
    )
}