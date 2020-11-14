import styled from 'styled-components'

export const InputContainer = styled.div`
  margin-top: 15px;
  display: flex;
`

export const Input = styled.input(({ type = "text", theme }) => `
  background: ${theme.colours.darkest};
  border: none;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
  color: ${theme.colours.white};
`)

export const Button = styled.button(({ theme }) => `
  border-radius: 25px;
  background: ${theme.colours.darkest};
  color: ${theme.colours.green};
  cursor: pointer;
  outline: none;
`)
