import React from 'react';
import Router from 'react-router';
import Dashboard from './components/Dashboard.jsx';
import TimeEntry from './components/TimeEntry.jsx';
import Success from './components/Success.jsx';

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
        <Route name='timeentry' path='/timeentry/:developerName' handler={TimeEntry}/>
        <Route name='success' handler={Success}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);


Router.run(routes, function (Handler, state) {
    var params = state.params;
    React.render(<Handler params={params}/>, document.querySelector('#content'));
});