import { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import {DropdownList, DropdownItem} from '../config/Dropdown.style'


const Dropdown = ({ options }) => {
  const { setCompoundRate, setSelected, setIsOpen } = useContext(
    CalculatorContext,
  )

  return (
    <DropdownList>
      {options.map((option) => (
        <DropdownItem
          key={Math.random()}
          onClick={() => {
            setCompoundRate(option.value)
            setSelected(option.name)
            setIsOpen(false)
          }}
        >
          {option.name}
        </DropdownItem>
      ))}
    </DropdownList>
  )
}

export default Dropdown
