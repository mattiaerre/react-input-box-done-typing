# react-input-box-done-typing

A React component that triggers a callback when the user has finished typing in the input text box

## Usage

Install via npm using the following npm command:

```shell
npm i -S react-input-box-done-typing
```

Include the component within your React application:

```javascript
import InputBoxDoneTyping from 'react-input-box-done-typing';
```

And use it inside your container:

```javascript
<InputBoxDoneTyping
  inputId="input-box-done-typing"
  inputClassName="form-control"
  inputPlaceholder="Start typing ..."
  inputDefaultValue="lon"
  inputOnChange={(value) => { console.log('inputOnChange:', value); } }
  inputDoneTyping={(value) => { console.log('inputDoneTyping:', value); } }
  doneTypingInterval={2000}
  />
```

## Attributes

Name | Type | Required | Default | Options
--- | --- | --- | --- | ---
`inputId` | `string` | no | - | -
`inputClassName` | `string` | no | - | -
`inputPlaceholder` | `string` | no | - | -
`inputDefaultValue` | `string` | no | - | -
`inputAutoComplete` | `string` | no | on | ['on', 'off']
`inputOnChange` | `function` | no | - | -
`inputDoneTyping` | `function` | yes | - | -
`doneTypingInterval` | `number` | no | 500 (milliseconds) | -

## Demo

Clone or download this GitHub repository then run a live demo using the following npm commands:

```shell
npm i
npm run demo
```

The script will automatically open a tab of your default browser;
you will be able to see the **InputBoxDoneTyping** component in action

![alt text](demo.png "demo")
