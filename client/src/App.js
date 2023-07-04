import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const App = () => {
  const [inputValues, setInputValues] = useState({
    content: '',
    tone: '',
    keywords: '',
    command: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const savedData = await axios.post(
      `https://assignment-digi-tech-plug-server.vercel.app/add-data`,
      inputValues,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(savedData.data);
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
        <div className="nav flex  ">
          <div className="shift flex space">
            <div className="undo space">↶</div>
            <div className="redo space">↷ </div>
          </div>

          <div className="fontsize flex ">
            <div className="h1 space">H1</div>
            <div className="h2 space">H2</div>
            <div className="h3 space">H3</div>
            <div className="h4 space">H4 </div>
          </div>

          <div className="fontstyle flex ">
            <div className="bold space">
              <b>B</b>
            </div>
            <div className="italics space">
              <i>I</i>
            </div>
            <div className="underline space">U</div>
          </div>
        </div>
        <div className="display">
          <div className="col1">
            <p>{inputValues.command}</p>
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
