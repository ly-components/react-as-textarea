# react-as-textarea

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/react-as-textarea.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/react-as-textarea?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/react-as-textarea.png)](https://travis-ci.org/LingyuCoder/react-as-textarea)
[![Dependency Status](https://david-dm.org/LingyuCoder/react-as-textarea.svg)](https://david-dm.org/LingyuCoder/react-as-textarea)
[![devDependency Status](https://david-dm.org/LingyuCoder/react-as-textarea/dev-status.svg)](https://david-dm.org/LingyuCoder/react-as-textarea#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/react-as-textarea.svg?style=flat-square)](http://npmjs.org/package/react-as-textarea)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/react-as-textarea.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/react-as-textarea.svg?style=flat-square)](https://npmjs.org/package/react-as-textarea)

> A React autosize textarea

## Demo

[]()

## Installation

```bash
$ npm install --save react-as-textarea
```

## Usage

```javascript
import Textarea from 'react-as-textarea';
<Textarea />;
```

## Properties

[insert]: # (start:src/index.jsx|doc)
| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| maxRows | the maximum number of rows | Number |  | `5` |
| minRows | the minimum number of rows | Number |  | `3` |
| onChange | callback when text changes | Function |  | `() => {}` |
| onHeightChange | callback when height changes | Function |  | `() => {}` |
| value | current value of textarea | String |  |  |
[insert]: # (end:src/index.jsx)

## Development

```bash
$ npm run dev # startup local dev server
$ npm run build # build
$ npm run test # run tests
$ npm run cov # run coverage
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
