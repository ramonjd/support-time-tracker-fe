import React from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import Button from './Button.jsx';
import SelectList from './SelectList.jsx';
import Actions from '../actions/Actions.jsx';
import Store from '../stores/Store.jsx';


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
        selectedDay : new Date(),
        selectedTask : taskList[0].value,
        selectedHours : 0.0
    };
};


class TimeEntry extends React.Component {

    constructor() {
        super();
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleHoursChange = this.handleHoursChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onAddTimeEntry = this.onAddTimeEntry.bind(this);
        this.state = getState();
    }

    componentDidMount() {
        this.setState({
            developer: this.props.params.developerName
        });
        Store.addTimeEntryAddedListener(this.onAddTimeEntry)
    }

    componentWillUnmount() {
        Store.removeTimeEntryAddedListener(this.onAddTimeEntry)
    }

    onAddTimeEntry(){
        // actually want to do something like this http://blog.benstokoe.co.uk/react-router-store-in-flux/
        window.location.href = '/#/success'
    }

    handleDayClick(event, day) {
        this.setState({
            selectedDay: day
        });
    }

    handleTaskChange(event) {
        this.setState({
            selectedTask: event.target.value
        });
    }

    handleHoursChange(event) {
        this.setState({
            selectedHours: event.target.value
        });
    }

    handleSubmit() {
        Actions.addSupportTimeEntry(this.state);
    }

    render() {

        let {selectedDay} =  this.state;
        let dayPickerModifiers = {

            selected: (day) => isSameDay(selectedDay, day)
        };

        return (
            <div className='TimeEntry'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>{this.props.params.developerName}</h1>
                    </div>
                </div>
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
                        <div className='form-group'>
                            <SelectList data={taskList} onChange={this.handleTaskChange}/>
                        </div>
                        <h3>Hours</h3>
                        <div className='form-group'>
                            <input type='number' onChange={this.handleHoursChange} className='form-control' id='numberofHours' min='0.5' max='10' step='0.5' placeholder='0.0'/>
                        </div>
                        <Button className='btn btn-success' onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </div>

            </div>
        );
    }
}
export default TimeEntry;