import { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import Dropdown from './Dropdown'
import { DropdownLabel, DropdownContainer } from '../config/Dropdown.style'

const DropdownWrapper = ({ options }) => {
  const { isOpen, setIsOpen, selected } = useContext(CalculatorContext)

  return (
    <DropdownContainer>
      <DropdownLabel
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {selected || options[0].name}
      </DropdownLabel>
      {isOpen && <Dropdown options={options} />}
    </DropdownContainer>
  )
}

export default DropdownWrapper
