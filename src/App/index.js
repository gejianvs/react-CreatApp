import React, {Component} from 'react';
import {BrowserRouter,Switch, Route, Redirect,HashRouter} from 'react-router-dom';
import Layout from  '../Layout'
import Login from  '../Login'
import ProductsList from '../ProductsList';


class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Layout}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path='/productsList' component={ProductsList}/>
                </Switch>
            </HashRouter>

        );
    }
}

export default App;
