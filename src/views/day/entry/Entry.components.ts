import styled from "styled-components";

export const EntryViewRoot = styled.div(({ theme }) => `
  position: relative;
  padding: 0 10px;
  border: 1px solid ${theme.colours.dark};
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 650px) {
    margin-top: 20px;
    margin-right: 0;
  }

  :hover {
    border: 1px solid ${theme.colours.green};
  }
`)

export const Timestamp = styled.span`
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 0.75em;
`