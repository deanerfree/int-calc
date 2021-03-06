import styled from 'styled-components'

export const DropdownList = styled.ul`
  overflow: hidden;
  margin: 0px;
  margin-left: 10px;
  padding: 0px;
  border-top: 0.125px;
  border-bottom: 1px;
  border-left: 1px;
  border-right: 1px;
  border-style: solid;
  border-color: rgba(138, 137, 144, 0.89);
  border-radius: 10px;
  position: relative;
  flex-direction: column;
  background-color: white;
  z-index: 1;
  width: 220px;
`
export const DropdownItem = styled.li`
  font-size: 20px;
  justify-content: flex-start;
  list-style-type: none;
  cursor: pointer;
  padding: 10px;
  border: 1px;
  border-style: solid;
  border-color: rgba(138, 137, 144, 0.89);
  &:hover {
    background-color: whitesmoke;
  }
`
export const DropdownLabel = styled.div`
  margin-left: 10px;
  padding: 10px;
  flex-direction: row;
  font-size: 40px;
  font-weight: 600;
  border: 2px solid rgba(138, 137, 144, 0.89);
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
`
export const DropdownWrapper = styled.div`
  margin-left: 20px;
  margin-top: -10px;
  justify-content: center;
`
