import { useContext, useState, useEffect, useRef } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import Dropdown from './Dropdown'
import { DropdownLabel, DropdownWrapper } from '../config/Dropdown.style'

const DropdownContainer = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const { selected } = useContext(CalculatorContext)
  const ref = useRef()
  //Closes the dropbox after item is selected
  useEffect(()=>{
      document.body.addEventListener('click', e => {
        if (ref.current.contains(e.target)) {return}
        setIsOpen(false)
      })
  },[])
  

  return (
    <DropdownWrapper ref={ref}>
      <DropdownLabel onClick={()=>setIsOpen(!isOpen)}>
        {selected || options[0].name}
      </DropdownLabel>
      {isOpen && <Dropdown options={options}  />}
    </DropdownWrapper>
  )
}

export default DropdownContainer
