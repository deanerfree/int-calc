import { useContext, useState } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import Dropdown from './Dropdown'
import { DropdownLabel, DropdownWrapper } from '../config/Dropdown.style'

const DropdownContainer = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { selected } = useContext(CalculatorContext)
  const openDropBox = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DropdownWrapper>
      <DropdownLabel onClick={openDropBox}>
        {selected || options[0].name}
      </DropdownLabel>
      {isOpen && <Dropdown options={options} isOpen={isOpen} />}
    </DropdownWrapper>
  )
}

export default DropdownContainer
