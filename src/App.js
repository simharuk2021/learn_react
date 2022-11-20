import React, { Component } from 'react';
import Products from './Products';
import UserForm from './UserForm';
// import Jumbotron from './Jumbotron';

class App extends Component {
  render() {        
    return (
      <div>
        <UserForm />
        {/* <Products />    */}
      </div>
    );
  }
}

export default App;

