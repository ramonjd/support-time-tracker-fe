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
                    <h2>I want to</h2>
                </div>
            </div>
        );
    }
}


export default Dashboard;