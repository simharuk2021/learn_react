import React, { Component } from 'react';
import Products from './Products';
import UserForm from './UserForm';
// import Jumbotron from './Jumbotron';
import Github from './GitHub';

class App extends Component {
  render() {        
    return (
      <div>
        {/* <UserForm /> */}
        {/* <Products />    */}
        <Github />
      </div>
    );
  }
}

export default App;

