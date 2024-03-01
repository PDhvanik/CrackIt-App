import React from 'react'

const Content = () => {
   return (
      <>
         <div className="top-heading">TEST YOUR</div>
         <div className='main-heading'>
            CODING
         </div>
         <div className="bottom-heading">SKILLS HERE</div>
         <div className='arrow-container'>
            <h2>Scroll down</h2>
            <img src="./src/utils/arrow-down.png" className='arrow' alt="Arrow" />
         </div>
         <hr className='divider' />
         <div className="editor-container">
            <div className='left-editor'>Questions here</div>
            <div className="right-editor">
               <h2>CODE EDITOR</h2>
               <textarea name="CodeEditor" id="code-editor" cols="70" rows="10" placeholder='Write code here..'></textarea>
            </div>
         </div>
      </>
   )
}

export default Content



