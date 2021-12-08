import { useContext, useState } from "react"
import { Line, LineChart, XAxis, YAxis } from "recharts"
import { CalculatorContext } from "../context/CalculatorContext"

const LineGraph = () => {
	const { cleanedDataList, cpiData, selectData } = useContext(CalculatorContext)
	selectData(cpiData)
	console.log(selectData)
	return (
		<div>
			<h2>chart</h2>
			<LineChart
				width={600}
				height={300}
				data={cpiData}
				margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
				<Line
					type='monotone'
					dataKey='value'
					stroke='#000'
					strokeWidth={2}
					dot={false}
				/>
				<XAxis
					padding={{ right: 0 }}
					dataKey='refPer'
					allowDecimals={false}
					dx={30}
					dy={15}
					angle={25}
					style={{ fontSize: "12px" }}
				/>
				<YAxis
					style={{ fontSize: "12px" }}
					datakey='value'
					allowDecimals={false}
					domain={[
						(dataMin) => -20 + Math.abs(Math.floor(dataMin)),
						(dataMax) => 10 + Math.floor(dataMax),
					]}
				/>
			</LineChart>
		</div>
	)
}

export default LineGraph
