import { useState } from "react";
import { useRouter } from 'next/router'

export default function ContactForm() {
    const router = useRouter();
    const { query } = router
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [service, setService] = useState(query.service || "OTHER");
    const formSubmitUrl = "https://formsubmit.co/" + process.env.NEXT_PUBLIC_EMAIL_ADDRESS

    return (
        <div className="bg-white mt-20 mx-4 p-10 md:p-15 lg:pt-15 lg:px-20 border border-gray-500 rounded-lg">
            <form
                className="w-full max-w-lg"
                action={formSubmitUrl}
                method="POST"
                >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                            >
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-first-name"
                            type="text"
                            name="First Name"
                            placeholder="Your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                            >
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            name="Last Name"
                            placeholder="Your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                          >
                          Email
                      </label>
                      <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="email"
                          name="Email"
                          placeholder="example@acme.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                </div>
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="radioHost"
                    >
                    Services
                </label>
                <div className="radio-toolbar">
                    <input
                        type="radio"
                        id="radioHost"
                        name="service"
                        value="HOST"
                        className="hidden form-radio"
                        checked={service == "HOST" ? true : false}
                        onChange={(e) => setService("HOST")}
                    />
                    <label
                        htmlFor="radioHost"
                        className="bg-transparent hover:bg-gray-400 border border-gray-500 hover:border-transparent text-gray-800 font-bold py-2 px-4 md:px-10 rounded-lg"
                        >
                        HOST
                    </label>
                    <input
                        type="radio"
                        id="radioOther"
                        name="service"
                        value="OTHER"
                        className="hidden"
                        checked={service == "OTHER" ? true : false}
                        onChange={(e) => setService("OTHER")}
                    />
                    <label
                        htmlFor="radioOther"
                        className="bg-transparent hover:bg-gray-400 border border-gray-500 hover:border-transparent text-gray-800 font-bold py-2 px-4 md:px-10 rounded-lg"
                        >
                        OTHER
                    </label>
                </div>
                <div className="flex flex-wrap -mx-3 my-8">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-message"
                            >
                            Message
                        </label>
                        <textarea
                            className="appearance-none block w-full h-24 bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-message"
                            type="text"
                            name="Message"
                            placeholder="Enter a brief message here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end items-end">
                    <button
                        className="shadow bg-green hover:opacity-90 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded-lg"
                        type="submit"
                        >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
