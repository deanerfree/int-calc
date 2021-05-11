import styled from 'styled-components'

export const Button = styled.button`
  justify-content: center;
  width: 300px;
  padding: 30px;
  margin: 5px;
  font-size: 40px;
  color: whitesmoke;
  background-color: black;
  border-radius: 10px;
  border-width: 5px;
  font-weight: 600;
  border: solid black;

  &:hover {
    background-color: whitesmoke;
    color: black;
    border: solid black;
  }
`
export const Answer = styled.div`
  font-size: 80px;
  font-weight: 600;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding-left: 50px;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: top;
  flex-direction: row;
  position: relative;
  height: 7em;
`

export const Input = styled.input`
  position: relative;
  margin-left: 10px;
  height: 50px;
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
  position: relative;
  font-size: 40px;
  font-weight: 600;
`

