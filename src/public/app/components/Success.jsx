import React from 'react';
import Button from './Button.jsx';
import Actions from '../actions/Actions.jsx';
import Store from '../stores/Store.jsx';
import moment from 'moment';



let getState = () => {
    return {

    };
};


class Success extends React.Component {

    constructor() {
        super();
        this.state = getState();
    }

    componentDidMount() {
        this.setState(JSON.parse(localStorage[0]));
    }

    componentWillUnmount() {
    }

    render() {

        let selectedDay =  moment(this.state.selectedDay).format('L');

        return (
            <div className='Success'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Time updated</h1>
                        <p><strong>{this.state.developerName}</strong> logged <strong>{this.state.selectedHours} {this.state.selectedTask} </strong> hours on <strong>{selectedDay}</strong></p>
                    </div>
                </div>

            </div>
        );
    }
}
export default Success;