import React from 'react'
import { Editor } from '@monaco-editor/react'
const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <div style={{display: 'flex'}}>
        <Editor height='60vh' defaultLanguage='html' theme='vs-dark' />
        <Editor height='60vh' defaultLanguage='css' theme='vs-dark' />
        <Editor height='60vh' defaultLanguage='javascript' theme='vs-dark' />
      </div>
      <div>
        output
      </div>
    </div>
  )
}

export default App
