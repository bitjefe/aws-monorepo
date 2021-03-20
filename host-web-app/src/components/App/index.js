import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import * as ROUTES from '../../constants/routes';

import HostSelectionPage from '../HostSelection';
import HomePage from '../Home';
import ScrollToTop from '../ScrollToTop';
import TellUsMorePage from '../TellUsMore';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Route exact path={ROUTES.HOSTSELECTION} component={HostSelectionPage} />
            <Route path={ROUTES.TELLUSMORE} component={TellUsMorePage} />
            <Route path={ROUTES.HOME} component={HomePage} />
        </Router>
    )
}

export default App;