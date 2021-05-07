import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'

import { Wrapper, Form, Label, Input } from '../config/styles'

const Inflation = () => {
  const { res, setStartDate, setEndDate, submitHandler } = useContext(
    CalculatorContext,
  )
  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Label>Start Date</Label>
        <Input
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
        ></Input>
        <Label>End Date</Label>
        <Input type="date" onChange={(e) => setEndDate(e.target.value)}></Input>
      </Form>
    </Wrapper>
  )
}

export default Inflation
