# react-input-box-done-typing

A React component that triggers a callback when the user has finished typing in the input text box

## Usage

Install via npm using the following npm command:

`npm i -S react-input-box-done-typing`

Include the component within your React application:

```js
import InputBoxDoneTyping from 'react-input-box-done-typing';
```

And use it inside your container:

```js
<InputBoxDoneTyping
  inputClassName="form-control"
  inputOnChange={(value) => { console.log('inputOnChange:', value); } }
  inputDefaultValue="lon"
  doneTypingInterval={2000}
  inputDoneTyping={(value) => { console.log('inputDoneTyping:', value); } }
  />
```

## Attributes

Name | Type | Required | Default
--- | --- | --- | ---
`inputClassName` | `string` | no | -
`inputOnChange` | `function` | no | -
`inputDefaultValue` | `string` | no | -
`doneTypingInterval` | `number` | no | 500 (milliseconds)
`inputDoneTyping` | `function` | yes | -

## Demo

Run a live demo using the following npm command:

`npm run demo`

The script will automatically open a tab of your default browser;
you will be able to see the **InputBoxDoneTyping** component in action

![alt text](demo.png "demo")


