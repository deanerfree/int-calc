import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const CalculatorContext = createContext()

const CalculatorContextProvider = (props) => {
  const [amount, setAmount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [principle, setPrinciple] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [compoundRate, setCompoundRate] = useState(1)
  const [time, setTime] = useState('')
  const [startDate, setStartDate] = useState(new Date(), 'YYYY-MM')
  const [endDate, setEndDate] = useState(new Date(), 'YYYY-MM')
  const [selected, setSelected] = useState(null)

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
  const data = []

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://www150.statcan.gc.ca/t1/wds/rest/getDataFromVectorByReferencePeriodRange?vectorIds="41690973"&startRefPeriod=${startDate}&endReferencePeriod=${endDate}`,
      )

      data.push(res.data[0].object.vectorDataPoint)

      // for (let i = 0; i < data.length; i++) {
      //   console.log('here we go', data[i])
      //   if (data[i] == startDate) {
      //   }
      // }
    } catch (err) {
      console.log('This is the error message:', err)
    }
  }

  return (
    //Variables and hooks to add to components
    <CalculatorContext.Provider
      value={{
        getData,
        amount,
        setAmount,
        calcCompoundInterest,
        principle,
        setPrinciple,
        interestRate,
        isOpen,
        setIsOpen,
        setInterestRate,
        compoundRate,
        setCompoundRate,
        time,
        setTime,
        setStartDate,
        setEndDate,
        submitHandler,
        selected,
        setSelected,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorContextProvider
