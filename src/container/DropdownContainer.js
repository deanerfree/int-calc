import { useState, useEffect, useRef } from 'react'

import { DropdownLabel, DropdownWrapper, DropdownList, DropdownItem } from '../config/Dropdown.style'

const DropdownContainer = ({options, parentOnChange}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0].name)
  const [value, setValue] = useState(options[0].value)
  const ref = useRef()

  //Closes the dropbox after item is selected
  useEffect(()=>{
      document.body.addEventListener('click', e => {
        if (ref.current.contains(e.target)) {return}
        setIsOpen(false)
      })
  },[])
  
  useEffect(()=>{
    if (value) {
      handleSelect(value)
    }
  },[selected])

  const handleSelect = (e) => {
    parentOnChange(e)
  }
  

  return (
    <DropdownWrapper ref={ref} onClick={()=>{setIsOpen(!isOpen)}} >
      <DropdownLabel value={value} parentOnChange={handleSelect}>
        {selected}
      </DropdownLabel>
      {isOpen && <DropdownList >
      {options.map((option, key) => (
        <DropdownItem 
          key={key}
          value={option.value}
          onClick={() => {
            setSelected(option.name)
            setValue(option.value)
          }}

        >
          {option.name}
        </DropdownItem>
      ))}
    </DropdownList>}
    </DropdownWrapper>
  )
}

export default DropdownContainer
