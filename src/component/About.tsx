import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
   return (
      <>
         <Navbar />
         <div className='about-bg'></div>
         <div className="about-container">
            <div className="about-content">
               <h2>About Our Platform</h2>
               <p>
                  Our platform is dedicated to helping individuals prepare for technical interviews, specifically focusing on system design questions. We provide a comprehensive range of resources and tools to assist you in mastering this crucial aspect of software engineering interviews.
               </p>
               <h3>Benefits of Using Our Platform:</h3>
               <ul className="benefits-list">
                  <li>Extensive Collection of System Design Questions: Access a wide array of system design questions covering various topics and complexities.</li>
                  <li>Interactive Problem-Solving Environment: Practice solving questions in a simulated real-world environment, gaining hands-on experience.</li>
                  <li>Feedback and Solutions: Receive detailed feedback on your solutions and access comprehensive explanations and solutions to each problem.</li>
                  <li>Interview Preparation: Prepare thoroughly for technical interviews by mastering system design concepts and strategies.</li>
                  <li>Community Engagement: Engage with a vibrant community of fellow learners, share insights, and collaborate on solving problems.</li>
               </ul>
               <p>
                  Whether you're a seasoned software engineer looking to brush up on your skills or a newcomer preparing for your first technical interview, our platform offers the resources and support you need to succeed.
               </p>
            </div>
            <Footer />
         </div>
      </>
   );
};

export default About;
