import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../containers/signIn/signIn';
import SignUp from '../containers/signUp/signUp';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </Router>
    );
}

export default App;