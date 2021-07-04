import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Space from "./components/Space/Space";
import { AuthProvider } from "./contexts/AuthContext"

const App = () => {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route path="/" component={Signin} exact/>
                        <Route path="/space" component={Space} />
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    )
}

export default App
