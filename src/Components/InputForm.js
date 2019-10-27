import React from 'react'

function InputForm(props) {
  return (
    <>
      <form id="input-form">
        <h1>BMI Converter</h1>

        <div>
          <label>Weight(kg)</label>
          <input name="weight" onChange={props.onChangeForms}/>
        </div>

        <div>
          <label>Height(cm)</label>
          <input name="height" onChange={props.onChangeForms}/>
        </div>
        
        <div>
          <select id="method">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default InputForm
