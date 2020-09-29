import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';
import Header from './components/Header';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            {/* So now, <App/> becomes a child of the <Header/> component */}
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);