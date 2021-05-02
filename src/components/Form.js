import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Numbers from './Numbers'
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`
const Label = styled.label``

const InputForm = () => {
  const [principle, setPrinciple] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [compoundRate, setCompoundRate] = useState(0)
  const [time, setTime] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Principle Value</label>
          <Input
            type="number"
            onChange={(e) => setPrinciple(e.target.value)}
            value={principle}
          />
        </div>
        <div className="form-group">
          <label>Interest Rate</label>
          <Input
            type="number"
            onChange={(e) => setInterestRate(e.target.value)}
            value={interestRate}
          />
        </div>
        <div className="form-group">
          <label>Compound Rate</label>
          <Input
            type="number"
            onChange={(e) => setCompoundRate(e.target.value)}
            value={compoundRate}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <Input
            type="number"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </div>
        <Numbers
          principle={principle}
          interestRate={interestRate}
          compoundRate={compoundRate}
          time={time}
        />
      </form>
    </>
  )
}

export default InputForm
