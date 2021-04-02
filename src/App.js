import logo from '../src/images/icons/Logo.png'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import ManageBooks from './components/MangeBooks/ManageBooks';
import EditBooks from './components/EditBooks/EditBooks';
import Login from './components/Admin/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Order/Order';

export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img style={{height:'30px',marginTop:'15px'}} src={logo} alt="" />
        </div>

        <div className="col-md-7 linkStyle">
            <Link style={{paddingRight:'25px'}} to='/home'>Home  </Link>
            <Link style={{paddingRight:'25px'}} to='/order'>Orders  </Link>
            <Link style={{paddingRight:'25px'}} to='/admin'>Admin  </Link>
          { loggedInUser.email ? loggedInUser.displayName: <Link style={{paddingRight:'25px'}} to='/login'><button className="btn btn-info">Log in</button></Link>}
        </div>

      </div>
      <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/manageBooks">
            <ManageBooks />
          </Route>
          <Route path="/editBooks">
            <EditBooks />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


    </div>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
