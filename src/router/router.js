import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../pages/login';
import Home from '../components/Home';
import Bookdetails from '../components/Bookdetails';
import Mycart from '../components/Mycart';
function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                     <Route path = "/home" component = {Home} />
                    <Route path = "/bookdetails" component = {Bookdetails} /> 
                    <Route path="/cart" component={Mycart}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router;