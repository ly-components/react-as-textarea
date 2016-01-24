import 'should';
import Textarea from '../src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
mocha.ui('bdd');
describe('react-as-textarea', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('should render', function() {
    return TestUtils.isElementOfType(<Textarea/>, Textarea).should.be.true();
  });
  it('should display minimum num of rows when no enough texts', function() {
    const value = `a`;
    const cp = ReactDOM.render(<Textarea minRows={2} value={value}/>, container);
    const textarea = ReactDOM.findDOMNode(TestUtils.findRenderedComponentWithType(cp, Textarea))
    return $(textarea).height().should.be.eql(18 * 2);
  });
  it('should auto resize when change', function() {
    const cp = ReactDOM.render(<Textarea minRows={2}/>, container);
    const textarea = ReactDOM.findDOMNode(TestUtils.findRenderedComponentWithType(cp, Textarea))
    textarea.value = `
    a
    a
    a
    `.trim();
    TestUtils.Simulate.change(textarea);
    $(textarea).height().should.be.eql(18 * 3);
  });
  it('should display correct height when in range', function() {
    const value = `
    a
    a
    a
    a
    `.trim();
    const cp = ReactDOM.render(<Textarea maxRows={6} minRows={2} value={value}/>, container);
    const textarea = ReactDOM.findDOMNode(TestUtils.findRenderedComponentWithType(cp, Textarea))
    return $(textarea).height().should.be.eql(18 * 4);
  });
  it('should display maximum num of rows when overflow', function() {
    const value = `
    a
    a
    a
    a
    a
    a
    a
    `.trim();
    const cp = ReactDOM.render(<Textarea maxRows={6} value={value}/>, container);
    const textarea = ReactDOM.findDOMNode(TestUtils.findRenderedComponentWithType(cp, Textarea))
    return $(textarea).height().should.be.eql(18 * 6);
  });
  it('should display correct height when custom line-height', function() {
    const value = `
    a
    a
    a
    a
    `.trim();
    const cp = ReactDOM.render(<Textarea maxRows={6} style={{lineHeight: '16px'}} value={value}/>, container);
    const textarea = ReactDOM.findDOMNode(TestUtils.findRenderedComponentWithType(cp, Textarea))
    return $(textarea).height().should.be.eql(16 * 4);
  });
});
if (window.mochaPhantomJS) {
  window.mochaPhantomJS.run();
} else {
  mocha.run();
}
