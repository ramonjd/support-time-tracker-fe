import React from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import Button from './Button.jsx';
import SelectList from './SelectList.jsx';
import Actions from '../actions/Actions.jsx';
import Store from '../stores/Store.jsx';
import devs from '../mock/developers.js';


let { isPastDay, isSameDay } = require('../utils/date');
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
];



let getState = () => {
    return {
        selectedDay : new Date(),
        selectedTask : taskList[0].value,
        selectedHours : 0.0
    };
};


let getDevById = (id) => {
    let dev = null;
    devs.forEach((item, index)=>{
        if (item.id.toString() == id.toString()) {
            dev = item;
            return false;
        }
    });
    return dev;
};


let getTaskByVal = (val) => {
    let t = null;
    taskList.forEach((item, index)=>{
        if (item.value.toString() == val.toString()) {
            t = item;
            return false;
        }
    });
    return t;
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
            developer: getDevById(this.props.params.developerName),
            developerName: getDevById(this.props.params.developerName).name
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
            selectedTask: getTaskByVal(event.target.value).name
        });
    }

    handleHoursChange(event) {
        this.setState({
            selectedHours: event.target.value
        });
    }

    handleSubmit() {
        window.localStorage[this.state.developer.id] = JSON.stringify(this.state);
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
                        <h1>{this.state.developerName}</h1>
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