import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router'
import axios from 'axios';
interface Question{
   title: string,
   description: string,
   level:Number
}
const SolveQuestion = () => {
   const [question, setQuestion] = useState<Question | null>(null);
   const location = useLocation();
   console.log(location.state.title);
   const fetchQuestion = async () => {
      axios.get(`/api/questions/${location.state.title}`).then((response) => {
         setQuestion(response.data.Question);
      });
   }
   useEffect(() => {
      fetchQuestion();
   }, []);
   return (
      <>
         <Navbar />
         {(question) ? <div>
            <h3 className='text-xl my-2'>{question.title}</h3>
            <p className=''>{question.description}</p>
            <p className='text-md m-1'>{question.level.toString()}</p>
         </div> :<></>}
      </>
   )
}

export default SolveQuestion
