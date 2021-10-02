import { useContext } from "react"
// import { Chart } from "chart.js"
import { CalculatorContext } from "../context/CalculatorContext"

const LineChart = () => {
	const { dataList } = useContext(CalculatorContext)
	console.log("The data:", dataList)
	return (
		<div>
			<h2>chart</h2>
		</div>
	)
}

export default LineChart
