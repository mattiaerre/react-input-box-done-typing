import React from 'react';
import ReactDOM from 'react-dom';
import InputBoxDoneTyping from '../src/InputBoxDoneTyping';

const App = (props) => {
  return (
    <div className="container">
      <div className="row">
        <InputBoxDoneTyping
          defaultValue="lon"
          onChange={(value) => { console.log('onChange:', value); } }
          doneTyping={(value) => { console.log('doneTyping:', value); } }
          doneTypingInterval={2000}
          />
      </div>
      <div className="row">
        <InputBoxDoneTyping
          doneTyping={(value) => { console.log('doneTyping:', value); } }
          />
      </div>
      <div className="row">
        <InputBoxDoneTyping
          id="input-box-done-typing"
          className="form-control"
          placeholder="Start typing ..."
          maxLength={20}
          autoComplete="on"
          doneTyping={(value) => { console.log('doneTyping:', value); } }
          />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
