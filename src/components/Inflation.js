import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import styled from 'styled-components'
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

const Inflation = () => {
  const { res, setStartDate, setEndDate, submitHandler } = useContext(
    CalculatorContext,
  )
  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Label>Start Date</Label>
        <Input></Input>
        <Label>End Date</Label>
        <Input></Input>
      </Form>
    </Wrapper>
  )
}

export default Inflation
