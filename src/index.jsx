import React from 'react';
import ReactDOM from 'react-dom';
import calHeight from './calHeight.jsx';

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      height: null
    };
    this._handleChange = this._handleChange.bind(this);
    this._resize = this._resize.bind(this);
  }
  componentDidMount() {
    this._resize();
  }
  componentWillReceiveProps(nextProps) {
    'value' in nextProps && this.setState({value: nextProps.value});
  }
  componentDidUpdate(prevProps, prevState) {
    this.state.height !== prevState.height && this.props.onHeightChange(this.state.height, prevState.height);
  }
  _resize() {
    this.setState({
      height: calHeight.bind(ReactDOM.findDOMNode(this))(this.props.minRows, this.props.maxRows)
    });
  }
  _handleChange(e) {
    this._resize();
    const value = e.target.value;
    this.setState({value});
    this.props.onChange(value);
  }
  render() {
    let {
      onChange,
      value,
      ...props
    } = this.props;
    props = {
      ...props
    };
    props.style = {
      ...props.style,
      height: this.state.height
    };
    return (<textarea onChange={this._handleChange} value={this.state.value} {...props}/>);
  }
}
Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  /**
   * the maximum number of rows
   */
  maxRows: React.PropTypes.number,
  /**
   * the minimum number of rows
   */
  minRows: React.PropTypes.number,
  /**
   * callback when text changes
   */
  onChange: React.PropTypes.func,
  /**
   * callback when height changes
   */
  onHeightChange: React.PropTypes.func,
  /**
   * current value of textarea
   */
  value: React.PropTypes.string
};
Textarea.defaultProps = {
  minRows: 3,
  maxRows: 5,
  onChange: () => {},
  onHeightChange: () => {}
};
export default Textarea;
