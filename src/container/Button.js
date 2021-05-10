import styled from 'styled-components'

//How to create a button that
const ButtonStyle = styled.button`
  justify-content: center;
  align-content: center;
  width: 300px;
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
const Button = ({ title, onClick }) => {
  return <ButtonStyle onClick={onClick}>{title}</ButtonStyle>
}

export default Button
