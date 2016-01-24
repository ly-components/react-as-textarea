import React from 'react';
import ReactDOM from 'react-dom';
import Textarea from '../src/index.jsx';
const value = `
a
a
a
a
`.trim();
ReactDOM.render(<Textarea maxRows={6} style={{padding: 10}} value={value}/>, document.getElementById('demo'));
