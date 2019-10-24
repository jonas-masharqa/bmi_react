import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
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
    debugger
    this.setState = ({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>BMI Converter</h1>
          <div>
            <label>weight(kg)</label>
            <input name="weight" onChange={ (e) => this.onChangeHandler(e)} />
          </div>

          <div>
            <label>weight(kg)</label>
            <input name="height" onChange={ (e) => this.onChangeHandler(e)} />
          </div>
          
          <div>
            <select id="method">
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>

          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
          />
      </div>
    );
  }
}

export default App;
