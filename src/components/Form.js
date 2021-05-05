import React, { useContext } from 'react'
import styled from 'styled-components'
import { CalculatorContext } from '../context/CalculatorContext'
import {
  Wrapper,
  Form,
  Label,
  Input,
  RadioInput,
  RadioLabel,
  Button,
  Answer,
} from '../config/styles'

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
    submitHandler,
  } = useContext(CalculatorContext)

  return (
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
          type="radio"
          id="compoundRate1"
          name="compoundRate"
          onChange={(e) => setCompoundRate(e.target.value)}
          value={1}
        />
        <RadioLabel htmlFor="compound1">Annual</RadioLabel>
        <RadioInput
          type="radio"
          id="compoundRate2"
          name="compoundRate"
          onChange={(e) => setCompoundRate(e.target.value)}
          value={2}
        />
        <RadioLabel htmlFor="compound2">Semi-Annual</RadioLabel>
        <Input
          type="radio"
          id="compoundRate3"
          name="compoundRate"
          onChange={(e) => setCompoundRate(e.target.value)}
          value={4}
        />
        <RadioLabel htmlFor="compound3">Quarterly</RadioLabel>
        <RadioInput
          type="radio"
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
          setCompoundRate(1)
          setInterestRate('')
          setPrinciple('')
          setTime('')
        }}
      >
        Clear
      </Button>
      <Answer>${amount}</Answer>
    </Form>
  )
}

export default InputForm
