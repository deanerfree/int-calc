import React, { useContext } from 'react'
import styled from 'styled-components'
import { CalculatorContext } from '../context/CalculatorContext'

const Button = styled.button`
  justify-content: center;
  padding: 30px;
  margin: 5px;
  font-size: 40px;
  color: whitesmoke;
  background-color: black;
  border-style: none;
  border-color: blue;
  border-radius: 30px;
  border-width: 5px;
  font-weight: 600;
`
const Answer = styled.div`
  font-size: 80px;
  font-weight: 600;
`

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

const RadioInput = styled.input`
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
const RadioLabel = styled.label`
  flex-direction: row;
  font-size: 20px;
  font-weight: 600;
`

const InputForm = () => {
  const {
    amount,
    setAmount,
    principle,
    setPrinciple,
    interestRate,
    setInterestRate,
    calcCompoundInterest,
    setCompoundRate,
    time,
    setTime,
  } = useContext(CalculatorContext)

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
          <RadioInput
            type="Radio"
            id="compoundRate1"
            name="compoundRate"
            onChange={(e) => setCompoundRate(e.target.value)}
            value={1}
          />
          <RadioLabel htmlFor="compound1">Annualy</RadioLabel>
          <RadioInput
            type="Radio"
            id="compoundRate2"
            name="compoundRate"
            onChange={(e) => setCompoundRate(e.target.value)}
            value={2}
          />
          <RadioLabel htmlFor="compound2">Semi-Annual</RadioLabel>
          <Input
            type="Radio"
            id="compoundRate3"
            name="compoundRate"
            onChange={(e) => setCompoundRate(e.target.value)}
            value={4}
          />
          <RadioLabel htmlFor="compound3">Quarterly</RadioLabel>
          <RadioInput
            type="Radio"
            id="compoundRate4"
            name="compoundRate"
            onChange={(e) => setCompoundRate(e.target.value)}
            value={12}
          />
          <RadioLabel htmlFor="compound4">Monthly</RadioLabel>
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

        <Button onClick={() => calcCompoundInterest()}>Calculate</Button>
        <Button
          onClick={() => {
            setAmount(0)
            setCompoundRate('')
            setInterestRate('')
            setPrinciple('')
            setTime('')
          }}
        >
          Clear
        </Button>
        <Answer>${amount}</Answer>
      </Form>
    </>
  )
}

export default InputForm
