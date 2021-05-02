import React, { useState } from 'react'
import styled from 'styled-components'
import Numbers from './Numbers'

const Form = styled.form`
  margin: 30px;
  padding-left: 50px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  font-size: 40px;
  font-weight: 600;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  max-width: 200px;
`
const Label = styled.label`
  font-size: 40px;
  font-weight: 600;
`
const LabelRad = styled.label`
  flex-direction: row;
  font-size: 20px;
  font-weight: 600;
`

const InputForm = () => {
  const [principle, setPrinciple] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [compoundRate, setCompoundRate] = useState('')
  const [time, setTime] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Form onSubmit={submitHandler}>
        <Wrapper>
          <Label>Principle Value:</Label>
          <Input
            pattern="^-?[0-9]\d*\.?\d*$"
            placeholder="0"
            onChange={(e) => setPrinciple(e.target.value)}
            value={principle}
          />
        </Wrapper>
        <Wrapper>
          <Label>Interest Rate:</Label>
          <Input
            pattern="^-?[0-9]\d*\.?\d*$"
            placeholder="0"
            onChange={(e) => setInterestRate(e.target.value)}
            value={interestRate}
          />
        </Wrapper>
        <Wrapper>
          <Label>Compound Rate:</Label>
          <Input
            type="Radio"
            id="compoundRate1"
            name="compoundRate"
            onChange={(e) => setCompoundRate(e.target.value)}
            value={1}
          />
          <LabelRad htmlFor="compound1">Annualy</LabelRad>
          <Input
            type="Radio"
            id="compoundRate2"
            name="compoundRate"
            onChange={(e) => setCompoundRate(e.target.value)}
            value={2}
          />
          <LabelRad htmlFor="compound2">Semi-Annual</LabelRad>
          <Input
            type="Radio"
            id="compoundRate3"
            name="compoundRate"
            onChange={(e) => setCompoundRate(e.target.value)}
            value={4}
          />
          <LabelRad htmlFor="compound3">Quarterly</LabelRad>
          <Input
            type="Radio"
            id="compoundRate4"
            name="compoundRate"
            onChange={(e) => setCompoundRate(e.target.value)}
            value={12}
          />
          <LabelRad htmlFor="compound4">Monthly</LabelRad>
        </Wrapper>
        <Wrapper>
          <Label>Time:</Label>
          <Input
            pattern="^-?[0-9]\d*\.?\d*$"
            placeholder="0"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </Wrapper>
        <Numbers
          principle={principle}
          interestRate={interestRate}
          compoundRate={compoundRate}
          time={time}
        />
      </Form>
    </>
  )
}

export default InputForm
