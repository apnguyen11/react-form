import React from 'react';
import logo from './logo.svg';
import './App.css';
import shortid from 'shortid';

export default class TodoForm extends React.Component{
  state = {
    text: ""
  };

  
  handleChange = (event) =>{
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div className="App">
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" 
            name="text"
            onChange={this.handleChange} />
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








