import { useState, createContext, useEffect } from "react"
import axios from "axios"

export const CalculatorContext = createContext()

const CalculatorContextProvider = (props) => {
	const date = new Date()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	// Calculate Future value of an investment
	const [amount, setAmount] = useState(0)
	const [compoundRate, setCompoundRate] = useState(1)
	const [isOpen, setIsOpen] = useState(false)
	const [interestRate, setInterestRate] = useState("")
	const [principle, setPrinciple] = useState("")
	const [selected, setSelected] = useState(null)
	const [time, setTime] = useState("")

	//Used to calculate inflation
	const [cpiData, setCpiData] = useState([])
	const [dollarValue, setDollarValue] = useState("")
	const [inflationValue, setInflationValue] = useState(0)
	const [startCpi, setStartCpi] = useState(1)
	const [endCpi, setEndCpi] = useState(0)
	const [search, setSearch] = useState(
		`2000-01-01&endReferencePeriod=${year}-${month}-01`
	)

	const [inflationFocus, setInflationFocus] = useState("41690973")

	// chart data
	const getData = async () => {
		try {
			const res = await axios.get(
				`https://www150.statcan.gc.ca/t1/wds/rest/getDataFromVectorByReferencePeriodRange?vectorIds="${inflationFocus}"&startRefPeriod=${search}`
			)
			setCpiData(res.data[0].object.vectorDataPoint)
			const cpiData = res.data[0].object.vectorDataPoint
			// console.log(typeof cpiData)
			// dataList.push(cpiData)
			setStartCpi(cpiData[0].value)
			setEndCpi(cpiData[cpiData.length - 1].value)
		} catch (err) {
			console.error("This is the error message:", err)
		}
	}

	let cleanedDataList = []
	let dataPoint = { date: null, value: null }

	const selectData = (data) => {
		data.forEach((point) => {
			dataPoint.date = point.refPer
			dataPoint.value = point.value
			cleanedDataList.push(dataPoint)
		})
	}

	const calculateInflationRatio = (start, end) => {
		let value = (end - start) / start
		return value
	}

	const calcCompoundInterest = () => {
		const calcAmount =
			principle * (1 + interestRate / compoundRate) ** (compoundRate * time)
		setAmount(calcAmount.toFixed(2))
	}

	const calcInflation = (start, end) => {
		const inflationRatio = calculateInflationRatio(start, end)
		const inflation = dollarValue * inflationRatio.toFixed(2) + dollarValue
		return setInflationValue(inflation)
	}

	//calculate compound interest rate with periodic deposits
	// eslint-disable-next-line
	const calcCompoundInterestPeriodicDeposits = () => {
		for (let i = time; i >= 0; i--) {
			const calcAmount =
				principle * (1 + interestRate / compoundRate) ** (compoundRate * i)
			setAmount(calcAmount.toFixed(2))
		}
	}

	const combined = [dollarValue]

	useEffect(() => {
		// retrieve information from statscan

		getData()
		// eslint-disable-next-line
	}, [search])

	useEffect(() => {
		try {
			// Calculate Inflation when value changes

			calcInflation(startCpi, endCpi)
		} catch (err) {
			console.error("This is the error message:", err)
		}
		// eslint-disable-next-line
	}, [combined])

	return (
		//Variables and hooks to add to components
		<CalculatorContext.Provider
			value={{
				amount,
				setAmount,
				compoundRate,
				cpiData,
				setCompoundRate,
				calcCompoundInterest,
				setInflationFocus,
				setDollarValue,
				search,
				setSearch,
				principle,
				setPrinciple,
				interestRate,
				setInterestRate,
				isOpen,
				setIsOpen,
				time,
				setTime,
				inflationValue,
				selected,
				setSelected,
				calculateInflationRatio,
				selectData,
				cleanedDataList,
			}}>
			{props.children}
		</CalculatorContext.Provider>
	)
}

export default CalculatorContextProvider
