import React, { useState, useRef } from 'react';
import axios from 'axios';
import './index.css';

const App = () => {
  const [inputValues, setInputValues] = useState({
    content: '',
    tone: '',
    keywords: '',
    command: '',
  });

  const [tag, setTag] = useState('p');
  const undoStackRef = useRef([]);
  const redoStackRef = useRef([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Push the previous command to the undo stack
    undoStackRef.current.push(inputValues.command);

    // Clear the redo stack whenever a new change is made
    redoStackRef.current = [];

    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTagChange = (selectedTag) => {
    setTag(selectedTag);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputValues.tone==='') {
      alert("Tone cannot be blank")
    }
    else{

    
    const savedData = await axios.post(
      `https://assignment-digi-tech-plug-server.vercel.app/add-data`,
      inputValues,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    setInputValues({
      content: '',
      tone: '',
      keywords: '',
      command: '',
    });
    console.log(savedData.data);
    alert(' Data has been saved successfully to DataBase')
  }
  };

  const handleUndo = () => {
    if (undoStackRef.current.length > 0) {
      const previousValue = undoStackRef.current.pop();
      redoStackRef.current.push(inputValues.command);
      setInputValues((prevState) => ({
        ...prevState,
        command: previousValue,
      }));
    }
  };

  const handleRedo = () => {
    if (redoStackRef.current.length > 0) {
      const nextValue = redoStackRef.current.pop();
      undoStackRef.current.push(inputValues.command);
      setInputValues((prevState) => ({
        ...prevState,
        command: nextValue,
      }));
    }
  };

  return (
    <div className="container">
      <div className="column1">
        <div className="input1">
          <label htmlFor="one">Content Description/Brief</label>
          <br />
          <textarea
            name="content"
            id="one"
            cols="10"
            rows="8"
            value={inputValues.content}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="input2">
          <label htmlFor="two">Tone Of Voice</label>
          {inputValues.tone==='' && <p style={{color:'red'}}>Tone Cannot be Blank</p>}
          <br />
          <input
            type="text"
            id="two"
            name="tone"
            value={inputValues.tone}
            onChange={handleInputChange}
          />
        </div>
        <div className="input3">
          <label htmlFor="three">Keywords</label>
          <br />
          <input
            type="text"
            id="three"
            name="keywords"
            value={inputValues.keywords}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="column2">
        <div className="nav flex">
          <div className="shift flex space">
            <div className="undo space" onClick={handleUndo}>
              ↶
            </div>
            <div className="redo space" onClick={handleRedo}>
              ↷
            </div>
          </div>

          <div className="fontsize flex">
            <div
              className="h1 space"
              onClick={() => handleTagChange('h1')}
              style={{ textDecoration: tag === 'h1' ? 'underline' : 'none' }}
            >
              H1
            </div>
            <div
              className="h2 space"
              onClick={() => handleTagChange('h2')}
              style={{ textDecoration: tag === 'h2' ? 'underline' : 'none' }}
            >
              H2
            </div>
            <div
              className="h3 space"
              onClick={() => handleTagChange('h3')}
              style={{ textDecoration: tag === 'h3' ? 'underline' : 'none' }}
            >
              H3
            </div>
            <div
              className="h4 space"
              onClick={() => handleTagChange('h4')}
              style={{ textDecoration: tag === 'h4' ? 'underline' : 'none' }}
            >
              H4
            </div>
          </div>

          <div className="fontstyle flex">
            <div
              className="bold space"
              onClick={() => handleTagChange('bold')}
              style={{ textDecoration: tag === 'bold' ? 'underline' : 'none' }}
            >
              <b>B</b>
            </div>
            <div
              className="italics space"
              onClick={() => handleTagChange('italics')}
              style={{ textDecoration: tag === 'italics' ? 'underline' : 'none' }}
            >
              <i>I</i>
            </div>
            <div
              className="underline space"
              onClick={() => handleTagChange('underline')}
              style={{ textDecoration: tag === 'underline' ? 'underline' : 'none' }}
            >
              U
            </div>
          </div>
        </div>
        <div className="display">
          <div className="col1">
            {tag === 'p' && <p>{inputValues.command}</p>}
            {tag === 'h1' && <h1>{inputValues.command}</h1>}
            {tag === 'h2' && <h2>{inputValues.command}</h2>}
            {tag === 'h3' && <h3>{inputValues.command}</h3>}
            {tag === 'h4' && <h4>{inputValues.command}</h4>}
            {tag === 'bold' && <b>{inputValues.command}</b>}
            {tag === 'italics' && <i>{inputValues.command}</i>}
            {tag === 'underline' && <u>{inputValues.command}</u>}
          </div>
          <div className="col2">
            <div className="bg">
              <div className="c1">
                <input
                  type="text"
                  className="run-command-input"
                  name="command"
                  value={inputValues.command}
                  onChange={handleInputChange}
                />
                <button>Run Command</button>
              </div>
              <div className="c2">
                <button onClick={handleSubmit}>Compose</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
