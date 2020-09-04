import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import signIn from "./containers/signIn/signIn";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path={'/'} component={signIn} exact={true}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
