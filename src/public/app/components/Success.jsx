import React from 'react';
import Button from './Button.jsx';
import Actions from '../actions/Actions.jsx';
import Store from '../stores/Store.jsx';





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
        this.setState({
            developer: this.props.params.developerName
        });
    }

    componentWillUnmount() {
    }

    render() {

        let {selectedDay} =  this.state;
        let dayPickerModifiers = {

            selected: (day) => isSameDay(selectedDay, day)
        };

        return (
            <div className='Success'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Time updated</h1>
                    </div>
                </div>

            </div>
        );
    }
}
export default Success;