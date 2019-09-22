import React from 'react';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

import MainContainer from './containers/MainContainer'
import AdditionalContainer from "./containers/AdditionalContainer";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={MainContainer}/>
                    <Route path='/additional' component={AdditionalContainer}/>
                </Switch>
            </div>
        )
    }
}

export default App;
