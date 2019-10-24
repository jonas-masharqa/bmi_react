import React, { Component } from 'react';
import DisplayResult from './Components/DisplayResult';
import InputForm from './Components/InputForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: ''
    }
  }

  onChangeHandler(e) {
    this.setState = ({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <>
        <div>
          <InputForm 
            onChangeForms={this.onChangeHandler.bind(this)}
          />
        </div>

        <div>
          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
          />
        </div>
      </>
    );
  }
}

export default App;
