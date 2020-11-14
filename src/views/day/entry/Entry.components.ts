import styled from "styled-components";

export const EntryViewRoot = styled.div(({ theme }) => `
  position: relative;
  padding: 0 10px;
  border: 1px solid ${theme.colours.dark};
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: 650px) {
    margin-right: 0;
  }

  :hover {
    border: 1px solid ${theme.colours.white};
  }
`)

export const Timestamp = styled.span`
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 0.75em;
`

export const TextareaContainer = styled.div(({ theme }) => `
  textarea {
    width: calc(100% - 10px);
    margin: 25px 0 5px 0;
  }
  button {
    border: none;
    color: ${theme.colours.white};
    background-color: ${theme.colours.darker};
    padding: 4px 12px;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`)