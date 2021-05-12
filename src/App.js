import './App.css'

import IntrestCalc from './components/InterestCalc'
import Inflation from './components/Inflation'
import CalculatorContext from './context/CalculatorContext'

function App() {
  return (
    <CalculatorContext>
      <div className="App">
        <IntrestCalc />
        <Inflation />
      </div>
    </CalculatorContext>
  )
}

export default App
