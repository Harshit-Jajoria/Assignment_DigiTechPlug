import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <div className="column1">
        <div className="input1">
          <label htmlFor="one">Content Description/Breif</label>
          <br />
          <textarea name="one" id="one" cols="10" rows="8"></textarea>
        </div>
        <div className="input2">
          <label htmlFor="two">Tone Of Voice</label>
          <br />
          <input type="text" id="two" />
        </div>
        <div className="input3">
          <label htmlFor="three">Keywords</label>
          <br />
          <input type="text" id="three" />
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
        <p>Hello i am from display of in the life of pie</p>
      </div>

      <div className="col2">
        <div className="bg">
        <div className="c1">
          <input type="text" />
          <button>Run Command</button>
        </div>
        <div className="c2">
          <button>Compose</button>
        </div>
        </div>

      </div>
      </div>
      </div>
    </div>
  );
};

export default App;
