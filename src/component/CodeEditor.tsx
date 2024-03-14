import React from 'react'

const CodeEditor = () => {
   return (
      <>
         <div className="editor-container">
            <div className='left-editor'>Questions here</div>
            <div className="right-editor">
               <h2>CODE EDITOR</h2>
               <textarea name="CodeEditor" id="code-editor" cols={70} rows={10} placeholder='Write code here..'></textarea>
            </div>
         </div>
      </>
   )
}

export default CodeEditor
