import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Header/>                     
          <Route path="/" Component={Dashboard}/>           
          <p>Hello, Its a React Training</p>
          <Dashboard/>     
        </div>
      </Router>
    )
  }
}
export default App;
