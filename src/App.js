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
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>BMI Converter</h1>
          <div>
            <label>Weight(kg)</label>
            <input id="weight" onChange={ (e) => this.onChangeHandler(e)} />
          </div>

          <div>
            <label>Height(cm)</label>
            <input id="height" onChange={ (e) => this.onChangeHandler(e)} />
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
