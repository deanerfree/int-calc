import React from 'react'

const Calculator = () => {
  const [interest, setInterest] = useState(0)
  

  const calculateInterest = () => {
    let principle = 1
    let interestRate = 3
    let compoundRate = 2
    let time = 1
    const amount =
      principle * (1 + interestRate / compoundRate) ** (compoundRate * time)
    return amount
  }