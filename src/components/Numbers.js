import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
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
const Numbers = (props) => {
  const [amount, setAmount] = useState(0)

  const calcCompoundInterest = () => {
    const calcAmount =
      props.principle *
      (1 + props.interestRate / props.compoundRate) **
        (props.compoundRate * props.time)
    setAmount(calcAmount.toFixed(2))
  }

  return (
    <div className="wrapper">
      <Button onClick={() => calcCompoundInterest()}>Calculate</Button>
      <Button
        onClick={() => {
          setAmount(0)
        }}
      >
        Clear
      </Button>
      <Answer>${amount}</Answer>
    </div>
  )
}
export default Numbers
