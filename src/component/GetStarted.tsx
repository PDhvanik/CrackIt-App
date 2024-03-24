import React from "react"
import { NavLink } from "react-router-dom"
import isLoggedIn from '../variables'
export default () => {
    return (
        <section className="p-12 mb-56">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl space-y-2 md:mx-auto font-sans">
                    <h3 className="text-gray-800 font-semibold text-xl">
                        TEST YOUR
                    </h3>
                    <p className="text-gray-800 text-3xl sm:text-4xl  font-serif">
                        CODING SKILLS
                    </p>
                    <h3 className="text-gray-800 font-semibold text-xl">
                        HERE
                    </h3>
                    <p className="text-gray-800 text-xl">
                        We are a team of experienced developers and designers who offer a range of Coding Questions to help you improve your Coding Skills and to help you get placed in your favourite company.
                    </p>
                </div>
                <div className="mt-3">
                    <NavLink to={(isLoggedIn.isloggedIn)?"/solvequestion":"/login"} className="inline-block py-2 px-3 text-white text-lg bg-indigo-600 duration-150 hover:bg-blue-950 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        Get started
                    </NavLink>
                </div>
            </div>
        </section>
    )
}