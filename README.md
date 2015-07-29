# React Autoresize Textarea

一个React实现的自适应大小的textarea

[DEMO](http://lingyucoder.github.io/react-as-textarea/demo/demo.html)

## Install

```
npm install --save react-as-textarea
```

## Usage

```javascript
var Textarea = require('react-as-textarea');

React.render(<Textarea ref="textarea" rows={3} maxRows={5} minRows={3} onHeightChange={this.handleHeightChange} onChange={this.handleChange}/>, container)
```

## Properties

支持html本身的textarea属性，另外还支持：

```jsx
value: React.PropTypes.string, //初始值
onChange: React.PropTypes.func, //值改变时回调，(value:string)
onHeightChange: React.PropTypes.func, //高度变化时回调，(height:number, prevHeight:number)
rows: React.PropTypes.number, //初始显示行数
minRows: React.PropTypes.number, //最少行数
maxRows: React.PropTypes.number //最大行数
```

## Methods

### string getValue()

获取textarea的当前值

### setValue(string)

设置textarea的值

## Development

```bash
$ npm start
$ open http://127.0.0.1:3000/demo/demo.html
```

## License

The MIT License (MIT)

Copyright (c) 2015 Lingyu Wang

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
