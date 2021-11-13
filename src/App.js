
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import Register from './Components/Login/Register/Register';
import Explores from './Components/Explores/Explores';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">


      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explores">
              <Explores></Explores>
            </Route>
            <PrivateRoute path="/bikes/:bikeID">
              <PlaceDetails></PlaceDetails>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Router path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
