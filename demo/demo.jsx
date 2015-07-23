import React from 'react';
import Textarea from '../src/index';

require('./demo.less');

class AsForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit() {
    console.log(this.refs.textarea.getValue())
  }
  handleChange(text) {
    console.log(text);
  }
  handleHeightChange() {
    console.log('height changed');
  }
  render() {
    return (
      <div>
        <div>
          <Textarea ref="textarea" rows={3} maxRows={5} minRows={1} onHeightChange={this.handleHeightChange} onChange={this.handleChange}/>
        </div>
        <div>
          <button className="submit" onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
      </div>
    );
  }
}

React.render(
  <AsForm/>,
  document.getElementById('form')
);
