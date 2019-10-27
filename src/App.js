import React, { Component } from 'react';
import DisplayResult from './Components/DisplayResult';
import InputForm from './Components/InputForm';
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

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <>
        <h1>BMI Converter</h1>
          <div>
            <label>Weight(kg)</label>
            <input name="weight" onChange={ (e) => this.onChangeHandler(e)} />
          </div>

          <div>
            <label>Height(cm)</label>
            <input name="height" onChange={ (e) => this.onChangeHandler(e)} />
          </div>
          
          <div>
            <select id="method" onChange={ (e) => this.onChangeHandler(e)}>
              <option name="metric" value="metric">Metric</option>
              <option name="imperial" value="imperial">Imperial</option>
            </select>
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
