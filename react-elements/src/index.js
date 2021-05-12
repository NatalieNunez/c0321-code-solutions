import React from 'react';
import ReactDom from 'react-dom';
const $divRoot = document.querySelector('#root');

const reactElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDom.render(reactElement, $divRoot);
