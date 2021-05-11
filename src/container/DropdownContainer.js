import { useState, useEffect, useRef } from 'react'

import { DropdownLabel, DropdownWrapper, DropdownList, DropdownItem } from '../config/Dropdown.style'

const DropdownContainer = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)

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
      {isOpen && <DropdownList>
      {options.map((option) => (
        <DropdownItem
          key={Math.random()}
          onClick={() => {
            setSelected(option.name)
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
