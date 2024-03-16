import React from "react"
import { NavLink } from "react-router-dom"
export default () => {
    return (
        <section className="p-16 my-[5.2vw]">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl space-y-2 md:mx-auto font-serif">
                    <h3 className="text-gray-800 font-semibold">
                        TEST YOUR
                    </h3>
                    <p className="text-gray-800 text-3xl sm:text-4xl">
                        CODING SKILLS
                    </p>
                    <h3 className="text-gray-800 font-semibold">
                        HERE
                    </h3>

                    <p className="text-gray-800 text-xl">
                        We offer a range of professional services to help you build your next big thing. Whether it
                        We are a team of experienced developers and designers who specialize in creating custom web
                        We are a team of experienced profession.
                    </p>
                </div>
                <div className="mt-3">
                    <NavLink to="/chatbot" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        Get started
                    </NavLink>
                </div>
            </div>
        </section>
    )
}