import React from 'react'
import { NavLink } from 'react-router-dom'
import isLoggedIn from '../variables'
const QuestionCard = ({ title, description, level }) => {
   return (
      <NavLink to={(isLoggedIn.isloggedIn) ? "/solvequestion" : "/login"} state={{ title: title }}>
         <div className='mx-24 my-8 border-2 border-red-700 p-3 rounded-2xl transform hover:scale-105 hover:cursor-pointer transition 0.2s ease-in-out'>
            <h3 className='text-3xl m-2 '>{title}</h3>
            <p className='text-lg text-left'>{description}</p>
            <p className='text-md mb-2'>Level: {level}</p>
            {/* <hr className='m-4' /> */}
         </div>
      </NavLink>

   )
}

export default QuestionCard
