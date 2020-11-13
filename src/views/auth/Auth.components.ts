import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h4`
  text-align: center;
  margin-bottom: 40px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
`

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #191717;
  color: #fff;
`

export const Label = styled.label`
  margin-bottom: 10px;
`

export const SubmitButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  background: #111;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    background: #191717;
  }

  :disabled {
    background: #080808;
    cursor: not-allowed;
  }

`

export const SwitchViewButton = styled.button`
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;

  :hover {
    background: #191717;
  }
`