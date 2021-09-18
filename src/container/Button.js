import styled from 'styled-components'

//How to create a button that
const ButtonWrapper = styled.button`
  display: flex;
  width: 300px;
  height: 100px;
  padding: 30px;
  margin: 0 5px 0 0;
  font-size: 40px;
  color: whitesmoke;
  background-color: black;
  border-radius: 10px;
  border-width: 5px;
  font-weight: 600;
  border: solid black;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: whitesmoke;
    color: black;
    border: solid black;
    cursor: pointer;
  }
`

const Button = ({ title, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{title}</ButtonWrapper>
}

export default Button
