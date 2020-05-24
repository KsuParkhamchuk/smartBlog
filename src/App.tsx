import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Registration from './components/Registration'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Route path="/signUp" component={Registration}></Route>
    </div>
    </Router>
  );
}

export default App;
