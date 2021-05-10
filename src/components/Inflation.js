import { useContext, useState } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import styled from 'styled-components'
import Button from './Button'
import { Wrapper, Form, Label, Input, Answer } from '../config/styles'

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
  //State imported from context file
  const {
    setSearch,
    inflationValue,
    setDollarValue, 
  } = useContext(CalculatorContext)

  //Set state for items that change state
  const[dollarInput, setDollarInput] = useState('')
  const [startDate, setStartDate] = useState('2000-01')
  const [endDate, setEndDate] = useState('2021-01')
  //date is modified set this way in order to select by month and follow Stats Canada format
  let modStartDate = `${startDate}-01`
  let modEndDate = `${endDate}-01`

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(
      `${modStartDate}&endReferencePeriod=${modEndDate}`,
    );
    setDollarValue(dollarInput);
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <Wrapper>
        <Label>Some Dollar Value</Label>
        <Input
          type="text"
          placeholder="0"
          value={dollarInput}
          onChange={(e) => setDollarInput(+e.target.value)}
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
