import React from 'react';
import ReactDOM from 'react-dom';
import InputBoxDoneTyping from '../src/InputBoxDoneTyping';

const App = (props) => {
  return (
    <div className="container">
      <div className="row">
        <InputBoxDoneTyping
          inputOnChange={(value) => { console.log('inputOnChange:', value); } }
          inputDefaultValue="lon"
          doneTypingInterval={2000}
          inputDoneTyping={(value) => { console.log('inputDoneTyping:', value); } }
          />
      </div>
      <div className="row">
        <InputBoxDoneTyping
          inputDoneTyping={(value) => { console.log('inputDoneTyping:', value); } }
          />
      </div>
      <div className="row">
        <InputBoxDoneTyping
          inputId="input-box-done-typing"
          inputClassName="form-control"
          inputPlaceholder="Start typing ..."
          inputAutoComplete="on"
          inputDoneTyping={(value) => { console.log('inputDoneTyping:', value); } }
          />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
