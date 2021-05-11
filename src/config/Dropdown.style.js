import styled from 'styled-components'

export const DropdownList = styled.ul`
  position: relative;
  overflow: hidden;
  flex-direction: column;
  z-index: 1;
`
export const DropdownItem = styled.li`
  justify-content: flex-start;
  list-style-type: none;
  cursor: pointer;
  `
  export const DropdownLabel = styled.label`
  margin-left: 10px;
  padding: 10px;
  flex-direction: row;
  font-size: 40px;
  font-weight: 600;
  border: 2px solid rgba(138, 137, 144, 0.89);
  border-radius: 10px;
`
export const DropdownContainer = styled.div``

export const Dropdown = styled.ul`
  overflow: hidden;
  position: relative;
  flex-direction: column;
  /* transform: translateX(20%); */
  /* max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; */
`
