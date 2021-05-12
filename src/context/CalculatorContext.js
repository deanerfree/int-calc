import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const CalculatorContext = createContext()

const CalculatorContextProvider = (props) => {
  // Calculate Future value of an investment
  const [amount, setAmount] = useState(0);
  const [compoundRate, setCompoundRate] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [interestRate, setInterestRate] = useState('')
  const [principle, setPrinciple] = useState('')
  const [selected, setSelected] = useState(null)
  const [time, setTime] = useState('')

  //Used to calculate inflation
  const [dollarValue, setDollarValue] = useState('')
  const [inflationValue, setInflationValue] = useState(0)
  const [startCpi, setStartCpi] = useState(1)
  const [endCpi, setEndCpi] = useState(0)
  const [search, setSearch] = useState(
    `2000-01-01&endReferencePeriod=2021-01-01`
  )

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

  

  const combined = [dollarValue || search]
  useEffect(() => {
    // retrieve information from statscan
    const getData = async () => {
      try {
        // console.log(search)
        const res = await axios.get(`https://www150.statcan.gc.ca/t1/wds/rest/getDataFromVectorByReferencePeriodRange?vectorIds="41690973"&startRefPeriod=${search}`)
  
        const cpiData = res.data[0].object.vectorDataPoint
        setStartCpi(cpiData[0].value)
        setEndCpi(cpiData[cpiData.length - 1].value)
      } catch (err) {
        console.log('This is the error message:', err)
      }
    }
    getData()
    // console.log(`This is the start value ${startCpi}`)
    // console.log(`This is the end value ${endCpi}`)
    const calcInflation = () => {
      const inflationRatio = (endCpi - startCpi) / startCpi;
      const inflation = dollarValue * inflationRatio.toFixed(2) + dollarValue;
      return setInflationValue(inflation);
    }
    
    calcInflation();
  
  }, [combined])

  

  return (
    //Variables and hooks to add to components
    <CalculatorContext.Provider
      value={{

        setDollarValue,
        search,
        setSearch,
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
        inflationValue,
        selected,
        setSelected,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorContextProvider
