import './App.css'

import Form from './components/Form'
import Inflation from './components/Inflation'
import CalculatorContext from './context/CalculatorContext'

function App() {
  return (
    <CalculatorContext>
      <div className="App">
        <Form />
        <Inflation />
      </div>
    </CalculatorContext>
  )
}

export default App
