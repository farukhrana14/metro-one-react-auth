import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn';
import SearchResult from './components/SearchResult/SearchResult';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import fakeData from './fakeData/fakeData.json';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [data, setData] = useState(fakeData);

  

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser], [data, setData]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <PrivateRoute path='/search'>
              <SearchResult></SearchResult>
            </PrivateRoute>

            <Route path='/login'>
              <LogIn></LogIn>
            </Route>

            <PrivateRoute path='/destination'>
              <Destination></Destination>
            </PrivateRoute>

            <PrivateRoute path = '/destination/:id'>
              <Destination></Destination>
            </PrivateRoute>

            <Route path='/contact'>
              <ContactUs></ContactUs>
            </Route>

            <Route path='/privacy'>
              <PrivacyPolicy></PrivacyPolicy>
            </Route>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>

      </UserContext.Provider>

    </div>
  );
}

export default App;
