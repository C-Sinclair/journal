import styled from 'styled-components'
import { AddIcon } from '../../shared/icons/Add/Add'

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

export const Add = styled(AddIcon)(({ theme }) => `
  cursor: pointer;
  margin-top: 4px;
`)