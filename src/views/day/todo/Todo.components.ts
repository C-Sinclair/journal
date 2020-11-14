import styled from "styled-components";
import { DeleteIcon } from '../../shared/icons/Delete/Delete'

export const Delete = styled(DeleteIcon)`
  cursor: pointer;
  transition: all 0.5s ease;
  position: absolute;
  right: 5px;
`

export const TodoViewRoot = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  ${Delete} {
    opacity: 0;
  }
  :hover {
    ${Delete} {
      opacity: 1;
    }
  }
`

export const Checkbox = styled.input`

`

export const TodoBody = styled.p`
  margin: 0;
  padding-left: 10px;
  max-width: 400px;
`

export const TodoInputContainer = styled.div(({ theme }) => `
  position: relative;

  textarea {
    font-size: 1em;
    margin: 10px;
    padding: 3px 10px;
    width: 220px;
  }

  button {
    position: absolute;
    bottom: 0px;
    right: 5px;
    padding: 4px 12px;
    color: ${theme.colours.white};
    background: ${theme.colours.green};
    border: none;
  }
`)