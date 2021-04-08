import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import ManageFood from './Components/ManageFood/ManageFood';
import AddFood from './Components/AddFood/AddFood';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Components/CheckOut/CheckOut';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router> 
      <Header></Header>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/check-out/:id"> 
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/manageFood">
            <ManageFood></ManageFood>
          </PrivateRoute>
          <PrivateRoute path="/addFood">
            <AddFood></AddFood>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
