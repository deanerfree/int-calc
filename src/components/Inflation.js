import { useContext, useState } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import styled from 'styled-components'
import Button from './Button'

import { Wrapper, Form, Label, Input, Answer } from '../config/styles'
import { set } from 'mongoose'
const InputDate = styled.input`
  position: relative;
  margin-left: 20px;
  height: 50px;
  color: black;
  font-size: 30px;
  font-weight: 600;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  max-width: 290px;
`
const Inflation = () => {
  const {
    setSearch,
    // startDate,
    // setStartDate,
    // endDate,
    // setEndDate,
    inflationValue,
    dollarValue,
    setDollarValue,
    submitHandler,
  } = useContext(CalculatorContext)
  const [startDate, setStartDate] = useState('2000-01')
  const [endDate, setEndDate] = useState('2021-01')
  let modStartDate = `${startDate}-01`
  let modEndDate = `${endDate}-01`
  return (
    <Form
      onSubmit={(e) => {
        setSearch(
          `https://www150.statcan.gc.ca/t1/wds/rest/getDataFromVectorByReferencePeriodRange?vectorIds="41690973"&startRefPeriod=${modStartDate}&endReferencePeriod=${modEndDate}`,
        )

        e.preventDefault()
      }}
    >
      <Wrapper>
        <Label>Some Dollar Value</Label>
        <Input
          type="number"
          placeholder="0"
          value={dollarValue}
          onChange={(e) => setDollarValue(e.target.value)}
        ></Input>
      </Wrapper>
      <Wrapper>
        <Label>Start Date:</Label>
        <InputDate
          type="month"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></InputDate>
      </Wrapper>
      <Wrapper>
        <Label>End Date:</Label>
        <InputDate
          type="month"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></InputDate>
      </Wrapper>
      <Wrapper>
        <Button title="Calc Inflation" type="submit" />
      </Wrapper>

      <Wrapper>
        <Answer>${inflationValue}</Answer>
      </Wrapper>
    </Form>
  )
}

export default Inflation
