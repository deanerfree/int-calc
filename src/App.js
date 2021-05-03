import './App.css'
import styled from 'styled-components'
import Form from './components/Form'
import CalculatorContext from './context/CalculatorContext'

function App() {
  return (
    <CalculatorContext>
      <div className="App">
        <Form />
      </div>
    </CalculatorContext>
  )
}

export default App
