import { useContext } from 'react'
import styled from 'styled-components'
import { CalculatorContext } from '../context/CalculatorContext'
import {
  Wrapper,
  Form,
  Label,
  Input,
  Dropdown,
  DropdownItem,
  DropdownLabel,
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
    isOpen,
    setIsOpen,
    setInterestRate,
    calcCompoundInterest,
    setCompoundRate,
    time,
    setTime,
    submitHandler,
    selected,
    setSelected,
  } = useContext(CalculatorContext)

  const options = [
    { value: 1, name: 'Annual' },
    { value: 2, name: 'Semi-Annual' },
    { value: 4, name: 'Quarterly' },
    { value: 12, name: 'Monthly' },
  ]
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
        <DropdownLabel
          onClick={() => {
            setIsOpen(!isOpen)
            console.log(isOpen)
          }}
        >
          {selected || options[0].name}
        </DropdownLabel>
        <Dropdown isOpen={isOpen}>
          {options.map((option) => (
            <DropdownItem
              key={Math.random()}
              onClick={(e) => {
                setCompoundRate(option.value)
                setSelected(option.name)
              }}
            >
              {option.name}
            </DropdownItem>
          ))}
        </Dropdown>
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
      </Wrapper>
      <Answer>${amount}</Answer>
    </Form>
  )
}

export default InputForm
