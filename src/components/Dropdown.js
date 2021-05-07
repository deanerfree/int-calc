import styled from 'styled-components'
import { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'

const DropdownList = styled.ul`
  overflow: hidden;
  flex-direction: column;
  /* transform: translateX(10%); */
  /* max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; */
`
const DropdownItem = styled.li`
  list-style-type: none;
  cursor: pointer;
`
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
