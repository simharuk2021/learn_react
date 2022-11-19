import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from'./Rating';

class App extends Component {
  render() {
    return (
      <div>
      <h1>
      My First React App
      <Rating rating="1"/>
      <Rating rating="2"/>
      <Rating rating="3"/>
      <Rating rating="4"/>
      <Rating rating="5"/>
      <Products />
      <Button variant = "primary" disabled >Default</Button>
      </h1>
      </div>
    );
  }
}

export default App;
