import { useContext } from "react"
// import { Chart } from "chart.js"
import { CalculatorContext } from "../context/CalculatorContext"

const LineChart = () => {
	const { cleanedDataList, cpiData, selectData } = useContext(CalculatorContext)

	selectData(cpiData)

	return (
		<div>
			<h2>chart</h2>
		</div>
	)
}

export default LineChart
