import React, { useState, useEffect } from 'react'

const Numbers = (props) => {
  const [amount, setAmount] = useState(0)

  const calcCompoundInterest = () => {
    const calcAmount =
      props.principle *
      (1 + props.interestRate / props.compoundRate) **
        (props.compoundRate * props.time)
    setAmount(calcAmount)
  }

  return (
    <div className="wrapper">
      <button onClick={() => calcCompoundInterest()}>Calculate</button>
      <div>{amount}</div>
    </div>
  )
}
export default Numbers
