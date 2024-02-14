import React, { useState } from 'react'
import { Editor } from '@monaco-editor/react'
const App = () => {
  const [code, setCode] = useState({html: "<!-- write your HTML code here -->\n<div>output</div>", css: "/* write your CSS code here */", js: "// write your JS code here"})
  const handleInput = (value, language) => {
    setCode(code => ({...code, [language]: value}))
  }

  const srcDoc = `
    <!DOCTYPE html>
    <html style="height:100%">
        <head>
            <meta charset="UTF-8" />
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body style="height:100%">${code.html}</body>
        <style>${code.css}</style>
        <script>${code.js}</script>
    </html>
  `

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <div style={{display: 'flex'}}>
        <Editor defaultValue={code.html} onChange={(value) => handleInput(value, 'html')} height='60vh' defaultLanguage='html' theme='vs-dark' />
        <Editor defaultValue={code.css} onChange={(value) => handleInput(value, 'css')} height='60vh' defaultLanguage='css' theme='vs-dark' />
        <Editor defaultValue={code.js} onChange={(value) => handleInput(value, 'js')} height='60vh' defaultLanguage='javascript' theme='vs-dark' />
      </div>
      <iframe title='output' className='flex-1 w-full h-full' style={{width: '100%', height: '100%', flex: '1 1 0%'}} aria-label='Preview' sandbox='allow-scripts' srcDoc={srcDoc}></iframe>
    </div>
  )
}

export default App
