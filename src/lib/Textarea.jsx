import React from 'react';
import calculateHeight from './calculateHeight';

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
    value: '',
    onChange: noop,
    onHeightChange: noop
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      height: null,
      minHeight: -Infinity,
      maxHeight: Infinity
    };
    this.handleChange = this.handleChange.bind(this);
    this._resize = this._resize.bind(this);
  }
  getValue() {
    return React.findDOMNode(this).value;
  }
  handleChange(e) {
    this._resize();
    this.props.onChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }
  handleHeightChange() {
    this.props.onHeightChange();
  }
  componentDidMount() {
    this._resize();
  }
  componentDidUpdate(prevProps, prevState) {
    this.state.height !== prevState.height && this.props.onHeightChange(this.state.height, prevState.height);
  }
  _resize() {
    this.setState(calculateHeight(React.findDOMNode(this), this.props.minRows || this.props.rows, this.props.maxRows));
  }
  render() {
    var {
      onChange,
      value,
      ...props
    } = this.props;
    props = {...props};
    props.style = {
      ...props.style,
      height: this.state.height
    };
    let maxHeight = Math.max( props.style.maxHeight ? props.style.maxHeight : Infinity, this.state.maxHeight);
    if (maxHeight < this.state.height) props.style.overflow = 'hidden';
    return (
      <textarea {...props} value={this.state.value} onChange={this.handleChange}/>
    );
  }
}
