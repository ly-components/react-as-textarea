import React from 'react';

var noop = () => {};

export default class Textarea extends React.Component {
  static propTypes = {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onHeightChange: React.PropTypes.func,
    rows: React.PropTypes.number,
    minRows: React.PropTypes.number,
    maxRows: React.PropTypes.number
  }
  static defaultProps = {
    onChange: noop,
    onHeightChange: noop
  }
  constructor(props) {
    super(props);
    this.state = {
      rows: props.rows
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }
  getValue() {
    return React.findDOMNode(this).value;
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  handleHeightChange() {
    this.props.onHeightChange();
  }
  render() {
    var {
      onChange,
      ...props
    } = this.props;
    return (
      <textarea {...props} onChange={this.handleChange}/>
    );
  }
}
