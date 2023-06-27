import { useState } from 'react'
import { marked } from 'marked'
import './App.css'

function App() {

  const [editorMarkup, setEditorMarkup] = useState(`# YELLING IN MARKDOWN!
## Scroll down to see more of the preview!
[Link to Google](https://www.google.com)
  \n\`const string = "Apparently this is supposed to be code."\`
  \`\`\`
{
"firstName": "John",
"lastName": "Smith"
}
  \`\`\`
- Clean my room!
  - Vacuum
  - Mop
  - Take out trash
  - Put away laundry

> "This is supposed to be some fancy blockquote, but honestly, I really only saw these in one of those fancy English college courses... Or was it high school?"

Just wanting to test out the **BOLD** font.

![alternate text](https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGx8ZW58MHx8MHx8fDA%3D&w=1000&q=80)
  `)

  const getMarkdownText = () => {
    const rawMarkup = marked.parse(editorMarkup)
    console.log(editorMarkup)
    return {__html: rawMarkup}
  }

  const handleChange = (event: any) => {
    setEditorMarkup(event.target.value)
  }

  return (
    <>
    <h1 id='main-title'>Markdown Previewer</h1>
    <p id='website-creator'>created by Chazz Carrizales</p>
      <div id="editor-wrapper">
      <h2 id='editor-title'>Editor</h2>
      <textarea rows={10} id="editor" value={editorMarkup} onChange={handleChange}>
        </textarea>
      </div>
      <div id="preview-wrapper">
      <h2 id='preview-title'>Previewer</h2>
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}>
      </div>
      
      </div>
    </>
  )
}

export default App
