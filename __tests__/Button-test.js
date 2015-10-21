//https://github.com/facebook/jest/blob/master/examples/react-es6/__tests__/CheckboxWithLabel-test.js
// https://www.npmjs.com/package/react-test-utils
jest.dontMock('../src/public/app/components/Button.jsx');
import React from 'react/addons';
const Button = require('../src/public/app/components/Button.jsx');
var TestUtils = React.addons.TestUtils;

describe('Button', () => {

  it('changes the text after click', () => {

  //  let handleSubmit = sinon.spy();
    let handleSubmit = () => {};
    // Render a checkbox with label in the document
    var button = TestUtils.renderIntoDocument(
      <Button className='btn btn-success' onClick={handleSubmit}>Submit</Button>
    );

    var buttonNode = React.findDOMNode(button);

    expect(buttonNode.textContent).toEqual('Submit');

  });

});
