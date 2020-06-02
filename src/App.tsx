import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Registration from './components/Registration'
import MainPage from './components/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/signUp"  component={Registration}/>
      </Switch>
    </div>
  );
}

export default App;
