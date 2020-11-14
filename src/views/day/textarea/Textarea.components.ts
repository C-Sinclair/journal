import styled from "styled-components";

export const TextareaRoot = styled.div`
  margin: auto;
  position: relative;
`

export const Textarea = styled.textarea(({ theme }) => `
  min-width: 360px;
  max-width: 360px;
  width: 360px;
  background: #111;
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: ${theme.colours.white};
  font-family: 'News Cycle', sans-serif;
  :focus {
    outline: none;
    border: 1px solid ${theme.colours.green};
  }
`)

interface TAButtonProps {
  focused?: boolean
}

export const Button = styled.button<TAButtonProps>(({ theme, focused }) => `
  border-radius: 25px;
  color: ${theme.colours.white};
  background: ${focused ? theme.colours.green : theme.colours.darker};
  cursor: pointer;
  border: none;
  outline: none;
  padding: 4px 12px;
  position: absolute;
  bottom: 0;
  right: -10px;
  transition: all 0.4s ease;
`)