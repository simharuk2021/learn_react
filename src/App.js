import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Products';
import UserForm from './UserForm';
// import Jumbotron from './Jumbotron';
import Github from './GitHub';

class App extends Component {
    render() {
      return (
        <div>
          <Header />
        </div>
      );
    }
}
export default App;

class Header extends Component {
  render() {        
    return (
      <BrowserRouter>
      <div>
        <Routes>
        {/* <UserForm /> */}
        {/* <Products />    */}
        <Route path ="/github" element = {<Github/>}/>
        <Route exact path ="/" element = {<Home/>} />
        <Route path ="/*" element = {<NotFound/>} />
        </Routes>
      </div>
      </BrowserRouter>)
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class NotFound extends Component {
  render() {
    return (
      <div>
        Not Found
      </div>
    )
  }
}

