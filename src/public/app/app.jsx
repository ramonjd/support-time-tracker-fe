import React from 'react';
import Router from 'react-router';
import Dashboard from './components/Dashboard.jsx';
import TimeEntry from './components/TimeEntry.jsx';

let { Route, DefaultRoute, RouteHandler, Link } = Router;

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <header>
                            <ul className='nav nav-pills'>
                                <li role='presentation' className='active'><Link className='btn btn-default' to='app'>Dashboard</Link>
                                </li>
                                <li role='presentation'><Link className='btn btn-default' to='timeentry'>Enter
                                    Time</Link></li>
                            </ul>
                        </header>
                        <main className='SupportTracker'>
                            <RouteHandler/>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}


let routes = (
    <Route name='app' path='/' handler={App}>
        <Route name='timeentry' handler={TimeEntry}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.querySelector('#content'));
});