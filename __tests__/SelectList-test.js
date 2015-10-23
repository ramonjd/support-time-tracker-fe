
jest.dontMock('../src/public/app/components/SelectList.jsx');
import React from 'react/addons';
const SelectList = require('../src/public/app/components/SelectList.jsx');

let taskList = [
    {
        name : 'Support Shift',
        value : 'a'
    },
    {
        name : 'Active Monitoring',
        value : 'b'
    },
    {
        name : 'Callout',
        value : 'c'
    },
    {
        name : 'Time Charged',
        value : 'd'
    }
],
handleTaskChange,
component,
renderedDOM;

describe('SelectList', () => {
  beforeEach(function() {
    let {TestUtils} = React.addons;
    handleTaskChange = jest.genMockFunction();
    component = TestUtils.renderIntoDocument(<SelectList data={taskList} onChange={handleTaskChange}/>);
    renderedDOM = () => React.findDOMNode(component);
  });

  it('should display list correctly and trigger props.onChange()', () => {
    let renderedOpts = renderedDOM().querySelectorAll('option');
    expect(renderedDOM().children.length).toEqual(4);
    expect(renderedOpts.length).toEqual(4);
    expect(renderedOpts[0].textContent).toEqual('Support Shift');
  });

});
