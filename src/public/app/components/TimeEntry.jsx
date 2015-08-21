import React from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import Button from './Button.jsx';
import SelectList from './SelectList.jsx';



let { isPastDay, isSameDay } = require('../utils/date');
let taskList = [
    {
        name : 'A',
        value : 'a'
    },
    {
        name : 'B',
        value : 'b'
    },
    {
        name : 'C',
        value : 'c'
    },
    {
        name : 'D',
        value : 'd'
    }
];



let getState = () => {
    return {
        selectedDay : new Date()
    };
};


class TimeEntry extends React.Component {

    constructor() {
        super();
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = getState();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleDayClick(e, day, modifiers) {
        this.setState({
            selectedDay: day
        });
    }

    render() {

        let {selectedDay} =  this.state;
        let dayPickerModifiers = {
            disabled: isPastDay,
            selected: (day) => isSameDay(selectedDay, day)
        };

        return (
            <div className='TimeEntry'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3>Select day</h3>
                        <DayPicker
                            modifiers={dayPickerModifiers}
                            className='SupportTracker'
                            onDayClick={ this.handleDayClick }
                            enableOutsideDays={true}/>
                    </div>
                    <div className='col-md-6'>
                        <h3>Select task</h3>
                        <SelectList data={taskList} onChange={this.setDay}/>
                    </div>
                </div>

            </div>
        );
    }
}
export default TimeEntry;