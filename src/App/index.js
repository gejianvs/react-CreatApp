import React, {Component} from 'react';
import {BrowserRouter,Switch, Route, Redirect,HashRouter} from 'react-router-dom';
import './App.css';
import Layout from  '../Layout'
import Login from  '../Login'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Layout}/>
                    <Route path="/login" exact component={Login}/>
                </Switch>
            </HashRouter>

        );
    }
}

export default App;
