import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import SearchResult from './components/SearchResult/SearchResult';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>

          <Route path='/search'>
            <SearchResult></SearchResult>
          </Route>

          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>

          <Route path='/login'>
            <LogIn></LogIn>
          </Route>

          <Route path='/destination'>
            <Destination></Destination>
          </Route>

          <Route path='/contact'>
            <ContactUs></ContactUs>
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
