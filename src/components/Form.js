import React, { useState, useRef } from 'react'
import styled from 'styled-components'
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

const inputForm = () => {
  const [interest, setIterest] = useState(0)
  return (
    <form>
      <div className="form-group">
        <label>Principle Interest</label>
        <Input type="number" value={2} onSubmit={} />
      </div>
      <div className="form-group">
        <label>Annual Contribution</label>
        <Input type="text" />
      </div>
      <div className="form-group">
        <label>Monthly Contribution</label>
        <Input type="text" />
      </div>
      <div className="form-group">
        <label>Interest Rate</label>
        <Input type="text" />
      </div>
      <div className="form-group">
        <label>Compound</label>
        <Input type="text" />
      </div>
      <div className="form-group">
        <label>After</label>
        <Input type="text" />
      </div>
      <div className="form-group">
        <label>Tax Rate</label>
        <Input type="text" />
      </div>
      <div className="form-group">
        <label>Inflation</label>
        <Input type="text" />
      </div>
    </form>
  )
}

export default Calculator
