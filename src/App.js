import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import signIn from "./containers/signIn/signIn";
import PrivateRoute from "./layouts/privateRoute/privateRoute";
import RootPage from "./layouts/rootPage/rootPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path='/' component={signIn} exact={true}/>
                    <PrivateRoute path='/' component={RootPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
