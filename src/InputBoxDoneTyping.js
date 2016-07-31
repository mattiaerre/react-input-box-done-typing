import React, {PropTypes} from 'react';

const InputBoxDoneTyping = (props) => {
  let typingTimer;
  let before = props.inputDefaultValue;

  const handleOnChange = (e) => {
    if (props.inputOnChange) {
      const value = e.target.value;
      props.inputOnChange(value);
    }
  }

  const handleOnKeyUp = (e) => {
    const value = e.target.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => { doneTyping(value); }, props.doneTypingInterval);
  }

  const handleOnKeyDown = () => {
    clearTimeout(typingTimer);
  }

  const doneTyping = (value) => {
    if (value.toLowerCase() !== before.toLowerCase()) {
      before = value;
      props.inputDoneTyping(value);
    }
  }

  return (
    <input
      type="text"
      id={props.inputId}
      className={props.inputClassName}
      placeholder={props.inputPlaceholder}
      defaultValue={props.inputDefaultValue}
      autoComplete={props.inputAutoComplete}
      onChange={handleOnChange}
      onKeyUp={handleOnKeyUp}
      onKeyDown={handleOnKeyDown}
      />
  );
}

InputBoxDoneTyping.defaultProps = {
  inputId: '',
  inputClassName: '',
  inputPlaceholder: '',
  inputDefaultValue: '',
  inputAutoComplete: 'on',
  doneTypingInterval: 500
};

InputBoxDoneTyping.propTypes = {
  inputId: PropTypes.string,
  inputClassName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputDefaultValue: PropTypes.string,
  inputAutoComplete: PropTypes.oneOf(['on', 'off']),
  inputOnChange: PropTypes.func,
  inputDoneTyping: PropTypes.func.isRequired,
  doneTypingInterval: PropTypes.number
};

export default InputBoxDoneTyping;
