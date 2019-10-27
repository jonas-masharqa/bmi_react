import React from 'react'

function CalculatorForm(props) {
  return (
    <>
      <h1>BMI Converter</h1>

      <div>
        <label>Weight(kg)</label>
        <input name="weight" onChange={props.onChangeHandler} />
      </div>

      <div>
        <label>Height(cm)</label>
        <input name="height" onChange={props.onChangeHandler} />
      </div>
      
      <div>
        <select id="method" onChange={ props.onChangeHandler}>
          <option name="metric" value="metric">Metric</option>
          <option name="imperial" value="imperial">Imperial</option>
        </select>
      </div>
    </>
  )
}

export default CalculatorForm