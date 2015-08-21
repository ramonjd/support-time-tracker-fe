import React from 'react';
import Router from 'react-router';
import SelectList from './SelectList.jsx';
import Actions from '../actions/Actions.jsx';
import Store from '../stores/Store.jsx';
import devs from '../mock/developers.js';

let { Route, DefaultRoute, RouteHandler, Link } = Router;

class Dashboard extends React.Component {

    constructor() {
        super();
        this.onGetDevs = this.onGetDevs.bind(this);
    }
    componentDidMount() {
       // Store.addTimeEntryAddedListener(this.onGetDevs)
    }

    componentWillUnmount() {
      //  Store.removeTimeEntryAddedListener(this.onGetDevs)
    }
    onGetDevs(data) {
        this.setState({
            developers: data
        });
    }
    render() {
        let developerList = devs.map((item, i) => {
            let toLink = '/timeentry/' + item.id;
            return (
                <li key={i} ref={'item' + i}>
                    <Link className='btn btn-default' to={toLink}>{item.name}</Link>
                </li>
            );
        });

        return (
            <div className='Dashboard'>
                <div className='row'>
                    <div className='col-md-12'>
                    <h2>Who are you?</h2>
                    <ul className='developerList'>
                        {developerList}
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}

/*<li><Link className='btn btn-default' to='/timeentry/Winston'>Winston</Link></li>
 <li><Link className='btn btn-default' to='/timeentry/Lewis'>Lewis</Link></li>
 <li><Link className='btn btn-default' to='/timeentry/Nigel'>Nigel</Link></li>*/
export default Dashboard;