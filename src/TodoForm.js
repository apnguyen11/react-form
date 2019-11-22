import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class TodoList extends React.Component{
  state = {
    todos: []
  }
  handleChange = (event) =>{
    this.ListeningStateChangedEvent({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        
        <form onSubmit={this.handleSubtmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          {/* <label>
            E-mail:
            <input type="text" name="email" />
          </label>
          <label>
            Phone:
            <input type="number" name="phone" />
          </label>
          <label>
            Address:
            <input type="text" name="address" />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zipcode" />
          </label>
          <label>
            City:
            <input type="text" name="city" />
          </label>
          <label>
            State:
            <input type="text" name="state" />
          </label> */}
          <input type="submit" value="Submit" />
        </form>
      
      </div>
    );
  }
  
  
};








