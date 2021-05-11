import { useContext, useState } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import DropdownWrapper from '../container/DropdownContainer'
import Button from '../container/Button'

import { Wrapper, Form, Label, Input, Answer } from '../config/GlobalStyles'

const IntrestCalc = () => {
  const {
    amount,
    setAmount,
    principle,
    setPrinciple,
    interestRate,
    // isOpen,
    setInterestRate,
    calcCompoundInterest,
    setCompoundRate,
    time,
    setTime,
  } = useContext(CalculatorContext)
  const[isOpen, setIsOpen] = useState(false)
  const options = [
    { value: 1, name: 'Annual' },
    { value: 2, name: 'Semi-Annual' },
    { value: 4, name: 'Quarterly' },
    { value: 12, name: 'Monthly' },
  ]
  const submitHandler = (e) => {
    e.preventDefault()
  }
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
        <DropdownWrapper options={options} isOpen={isOpen} onClick={() => {setIsOpen(!isOpen)}}/>
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
      <Wrapper>
        <Button title={'Calculate'} onClick={() => calcCompoundInterest()} />
        <Button
          title={'Clear'}
          onClick={() => {
            setAmount(0.0)
            setCompoundRate(1)
            setInterestRate('')
            setPrinciple('')
            setTime('')
          }}
        />
      </Wrapper>
      <Wrapper>
        <Answer>${amount}</Answer>
      </Wrapper>
    </Form>
  )
}

export default IntrestCalc