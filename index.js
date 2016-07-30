"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputBoxDoneTyping = function (_React$Component) {
  _inherits(InputBoxDoneTyping, _React$Component);

  function InputBoxDoneTyping(props) {
    _classCallCheck(this, InputBoxDoneTyping);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputBoxDoneTyping).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.handleOnKeyUp = _this.handleOnKeyUp.bind(_this);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    _this.consoleLogMessageAndValue = _this.consoleLogMessageAndValue.bind(_this);

    _this.typingTimer;
    _this.doneTypingInterval = props.doneTypingInterval || 500;

    _this.doneTyping = _this.doneTyping.bind(_this);
    return _this;
  }

  _createClass(InputBoxDoneTyping, [{
    key: "handleOnChange",
    value: function handleOnChange(e) {
      if (this.props.inputOnChange) {
        var value = e.target.value;
        this.props.inputOnChange(value);
      }
    }
  }, {
    key: "handleOnKeyUp",
    value: function handleOnKeyUp(e) {
      var _this2 = this;

      var value = e.target.value;
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(function () {
        _this2.doneTyping(value);
      }, this.doneTypingInterval);
    }
  }, {
    key: "handleOnKeyDown",
    value: function handleOnKeyDown() {
      clearTimeout(this.typingTimer);
    }
  }, {
    key: "doneTyping",
    value: function doneTyping(value) {
      this.props.inputDoneTyping(value);
    }
  }, {
    key: "consoleLogMessageAndValue",
    value: function consoleLogMessageAndValue(message, value) {
      console.log(message, value);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.props.divClassName },
        _react2.default.createElement("input", { type: "text",
          className: this.props.inputClassName,
          defaultValue: this.props.inputDefaultValue,
          onChange: this.handleOnChange,
          onKeyUp: this.handleOnKeyUp,
          onKeyDown: this.handleOnKeyDown
        })
      );
    }
  }]);

  return InputBoxDoneTyping;
}(_react2.default.Component);

InputBoxDoneTyping.propTypes = {
  divClassName: _react.PropTypes.string,
  inputClassName: _react.PropTypes.string,
  inputOnChange: _react.PropTypes.func,
  inputDefaultValue: _react.PropTypes.string,
  doneTypingInterval: _react.PropTypes.number,
  inputDoneTyping: _react.PropTypes.func.isRequired
};

exports.default = InputBoxDoneTyping;
