import styled from "styled-components";
import { DeleteIcon } from '../../shared/Delete'

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
