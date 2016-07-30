import React, {PropTypes} from 'react';

class InputBoxDoneTyping extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.consoleLogMessageAndValue = this.consoleLogMessageAndValue.bind(this);

    this.typingTimer;
    this.doneTypingInterval = props.doneTypingInterval || 500;

    this.doneTyping = this.doneTyping.bind(this);
  }

  handleOnChange(e) {
    if (this.props.inputOnChange) {
      const value = e.target.value;
      this.props.inputOnChange(value);
    }
  }

  handleOnKeyUp(e) {
    const value = e.target.value;
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => { this.doneTyping(value); }, this.doneTypingInterval);
  }

  handleOnKeyDown() {
    clearTimeout(this.typingTimer);
  }

  doneTyping(value) {
    this.props.inputDoneTyping(value);
  }

  consoleLogMessageAndValue(message, value) {
    console.log(message, value);
  }

  render() {
    return (
      <div className={this.props.divClassName}>
        <input type="text"
          className={this.props.inputClassName}
          defaultValue={this.props.inputDefaultValue}
          onChange={this.handleOnChange}
          onKeyUp={this.handleOnKeyUp}
          onKeyDown={this.handleOnKeyDown}
          />
      </div>
    );
  }
}

InputBoxDoneTyping.propTypes = {
  divClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  inputOnChange: PropTypes.func,
  inputDefaultValue: PropTypes.string,
  doneTypingInterval: PropTypes.number,
  inputDoneTyping: PropTypes.func.isRequired
};

export default InputBoxDoneTyping;