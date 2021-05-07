import styled from 'styled-components'

export const Button = styled.button`
  justify-content: center;
  width: 300px;
  padding: 30px;
  margin: 5px;
  font-size: 40px;
  color: whitesmoke;
  background-color: black;
  border-style: none;
  border-color: blue;
  border-radius: 30px;
  border-width: 5px;
  font-weight: 600;
`
export const Answer = styled.div`
  font-size: 80px;
  font-weight: 600;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding-left: 50px;
`
export const Wrapper = styled.div`
  flex-direction: row;
  align-items: center;
  flex-direction: row;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  font-size: 40px;
  font-weight: 600;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  max-width: 200px;
`

export const Label = styled.label`
  font-size: 40px;
  font-weight: 600;
`
export const DropdownLabel = styled.label`
  margin-left: 10px;
  padding: 10px;
  flex-direction: row;
  font-size: 40px;
  font-weight: 600;
  border: 2px solid rgba(200, 300, 100, 0.7);
  border-radius: 30px;
`

export const Dropdown = styled.div`
  overflow: hidden;
  flex-direction: column;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
`

export const DropdownItem = styled.div``
