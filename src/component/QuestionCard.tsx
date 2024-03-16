import React from 'react'
import { NavLink } from 'react-router-dom'
import isLoggedIn from '../variables'
const QuestionCard = ({ title, description, level }) => {
   return (
      <div className='m-4 p-2'>
         <h3 className='text-xl my-2'>{title}</h3>
         <p className=''>{description}</p>
         <p className='text-md m-1'>{level}</p>
         <NavLink to={(isLoggedIn.isloggedIn)?"/solvequestion":"/login"} state={{title:title}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Solve</NavLink>
      </div>
   )
}

export default QuestionCard
