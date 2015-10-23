
jest.dontMock('../src/public/app/components/Button.jsx');
import React from 'react/addons';
const Button = require('../src/public/app/components/Button.jsx');
var TestUtils = React.addons.TestUtils;
// http://simonsmith.io/unit-testing-react-components-without-a-dom/
const shallowRenderer = TestUtils.createRenderer();

describe('Button', () => {

  it('should display correct text and trigger props.onClick()', () => {

    let handleSubmit = jest.genMockFunction();

    var buttonComponent = TestUtils.renderIntoDocument(
      <Button className='btn btn-success' onClick={handleSubmit}>Submit</Button>
    );

    var buttonNode = React.findDOMNode(buttonComponent);
    expect(buttonNode.textContent).toEqual('Submit');

    TestUtils.Simulate.click(buttonComponent.refs.button);
    expect(handleSubmit.mock.calls.length).toBe(1);
  });

});
