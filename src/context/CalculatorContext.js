import React, { useState, createContext } from 'react'
import axios from 'axios'

export const CalculatorContext = createContext()

const CalculatorContextProvider = (props) => {
  const [amount, setAmount] = useState(0)
  const [principle, setPrinciple] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [compoundRate, setCompoundRate] = useState(1)
  const [time, setTime] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const calcCompoundInterest = () => {
    const calcAmount =
      principle * (1 + interestRate / compoundRate) ** (compoundRate * time)
    setAmount(calcAmount.toFixed(2))
  }
  //calculate compound interest rate with periodic deposits
  const calcCompoundInterestPeriodicDeposits = () => {
    for (let i = time; i >= 0; i--) {
      const calcAmount =
        principle * (1 + interestRate / compoundRate) ** (compoundRate * i)
      setAmount(calcAmount.toFixed(2))
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
  }
  //retrieve information from statscan

  const res = axios
    .get(
      `https://www150.statcan.gc.ca/t1/wds/rest/getDataFromVectorByReferencePeriodRange?vectorIds="1","41690973"&startRefPeriod=2000-01-01&endReferencePeriod=2021-01-01`,
    )
    .then((res) => {
      console.log(res.data)
    })

  return (
    //Variables and hooks to add to components
    <CalculatorContext.Provider
      value={{
        res,
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
        setStartDate,
        setEndDate,
        submitHandler,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorContextProvider
