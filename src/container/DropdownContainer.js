import { useContext, useState, useEffect } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import Dropdown from './Dropdown'
import { DropdownLabel, DropdownWrapper } from '../config/Dropdown.style'

const DropdownContainer = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { selected } = useContext(CalculatorContext)

  //Closes the dropbox after item is selected
  useEffect(()=>{
    const openDropBox = () => {
      setIsOpen(false)
    }
    openDropBox()
  },[selected])
  

  return (
    <DropdownWrapper>
      <DropdownLabel onClick={()=>setIsOpen(!isOpen)}>
        {selected || options[0].name}
      </DropdownLabel>
      {isOpen && <Dropdown options={options}  />}
    </DropdownWrapper>
  )
}

export default DropdownContainer
