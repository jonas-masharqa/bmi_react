import React, { Component } from 'react';
import DisplayResult from './Components/DisplayResult';
import CalculatorForm from './Components/CalculatorForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  onChangeHandler = (e) => {
    debugger
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <>
        <div>
          <CalculatorForm 
            onChangeHandler={this.onChangeHandler}
          />
        </div>

        <div>
          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
            method={this.state.method}
          />
        </div>
      </>
    );
  }
}

export default App;
