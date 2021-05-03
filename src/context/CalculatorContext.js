import React, { useState, createContext, useEffect } from 'react'

export const CalculatorContext = createContext()

const CalculatorContextProvider = (props) => {
  const [amount, setAmount] = useState(0)
  const [principle, setPrinciple] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [compoundRate, setCompoundRate] = useState(1)
  const [time, setTime] = useState('')

  const calcCompoundInterest = () => {
    const calcAmount =
      principle * (1 + interestRate / compoundRate) ** (compoundRate * time)
    setAmount(calcAmount.toFixed(2))
  }
  // useEffect(() => {
  //   calcCompoundInterest()
  // }, [])

  return (
    <CalculatorContext.Provider
      value={{
        amount,
        setAmount,
        calcCompoundInterest,
        principle,
        setPrinciple,
        interestRate,
        setInterestRate,
        compoundRate,
        setCompoundRate,
        time,
        setTime,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorContextProvider
