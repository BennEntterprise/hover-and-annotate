import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

let sampleText = `This is a test paragraph that lasts more than one line. \n It will hopefully be the start of something new!! And something awesome!!`

function App() {
  const [inputText, setInputText] = useState(sampleText)
  const [highlightableText, setHighlightableText] = useState('')

  const handleInputChange = e => {
    const incomingText = e.target.value
    setInputText(incomingText)
  }

  const convertToHighlightable = () => {
    setHighlightableText(inputText)
  }

  return (
    <div className="App">
      <p>Testing out a highlighting feature.</p>
      <div className="main">
        <textarea type="text" className="input-field" name="input-field" value={inputText} onChange={handleInputChange} />
        <button type="button" className="magic-button" onClick={convertToHighlightable} >Magic Button</button>
        <div className="text-output">{highlightableText && highlightableText.split(' ').map(word => <p className="highlightable" >{word}</p>)}</div>
      </div>
    </div>
  );
}

export default App;