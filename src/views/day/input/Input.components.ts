import styled from 'styled-components'

export const InputContainer = styled.div`
  margin-top: 15px;
  display: flex;
`

export const Input = styled.input(({ type = "text" }) => `
  background: #111;
  border: none;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
  color: #fff;
  width: 200px;
`)

export const Button = styled.button`
  border-radius: 25px;
  background: #111;
  color: green;
  cursor: pointer;
  outline: none;
`
