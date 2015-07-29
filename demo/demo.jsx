import React from 'react';
import Textarea from '../src/index';

require('./demo.less');

class AsForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit() {
    alert(this.refs.textarea.getValue());
  }
  handleChange(text) {
    console.log(text);
  }
  handleHeightChange(height, prevHeight) {
    console.log(`height changed: from ${prevHeight} to ${height}`);
  }
  handleReset() {
    this.refs.textarea.setValue('default value');
  }
  render() {
    return (
      <div>
        <div>
          <Textarea value="please write something" ref="textarea" rows={3} maxRows={5} minRows={3} onHeightChange={this.handleHeightChange} onChange={this.handleChange}/>
        </div>
        <div>
          <button className="submit" onClick={this.handleSubmit.bind(this)}>提交</button>
          <button className="submit" onClick={this.handleReset.bind(this)}>重置</button>
        </div>
      </div>
    );
  }
}

React.render(
  <AsForm/>,
  document.getElementById('form')
);
