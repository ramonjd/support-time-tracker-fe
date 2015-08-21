import React from 'react';
import Router from 'react-router';
let { Route, DefaultRoute, RouteHandler, Link } = Router;

class Dashboard extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='Dashboard'>
                <div className='row'>
                    <div className='col-md-12'>
                    <h2>Who are you?</h2>
                    <ul className='developerList'>
                        <li><Link className='btn btn-default' to='/timeentry/Winston'>Winston</Link></li>
                        <li><Link className='btn btn-default' to='/timeentry/Lewis'>Lewis</Link></li>
                        <li><Link className='btn btn-default' to='/timeentry/Nigel'>Nigel</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default Dashboard;