import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Loading from './Loading';
import QuestionCard from './QuestionCard';

interface Question {
   title: string,
   description: string,
   level: Number
}
const Quetions = () => {
   const [questionList, setQuestionList] = useState<Array<Question> | null>(null);

   async function fetchQuetions() {
      await axios.get('/api/quetions').then((response) => {
         setQuestionList(response.data.Questions);
      }).catch((error) => {
         console.log(error);
         alert(error.message);
      });
   }
   useEffect(() => {
      fetchQuetions();
   }, []);

   return (
      <>
         <img src='./src/utils/about-bg.jpg' className='fixed blur-md h-100 w-100 z-[-1]'></img>
         <Navbar />
         <div className='my-[5vw]'>
            {(questionList) ? <ul>{
               questionList.map((question, index) => (
                  <QuestionCard key={index} title={question.title} description={question.description} level={question.level} />
               ))
            }</ul> : <Loading />}
         </div>
      </>
   )
}

export default Quetions
