import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router'
import axios from 'axios';
import CodeEditor from './CodeEditor';
interface Question {
   title: string,
   description: string,
   level: Number
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
            <h3 className='text-2xl my-2'>{question.title}</h3>
            <p className='text-lg text-left mx-3'> {`-->`} {question.description}</p>
            <p className='text-lg m-1'>{question.level.toString()}</p>
         </div> : <></>}
         <hr />
         <CodeEditor />
      </>
   )
}

export default SolveQuestion
