import { useContext, useState } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import {DropdownList, DropdownItem} from '../config/Dropdown.style'


const Dropdown = ({ options, isOpen }) => {
  const { setCompoundRate, setSelected } = useContext(
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
           
          }}
        >
          {option.name}
        </DropdownItem>
      ))}
    </DropdownList>
  )
}

export default Dropdown
