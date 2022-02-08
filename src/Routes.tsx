import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;