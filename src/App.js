import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Flights from './components/Flights';
import Default from './components/Default';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/contact" component={Contact} />
                <Route path="/flights" component={Flights} />
                <Route component={Default} />
            </Switch>
        </React.Fragment>
    );
  }
}

export default App;
