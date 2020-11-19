import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle(({ theme }) => `
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    color: #fff;
    font-family: 'News Cycle', sans-serif;
  }
  h1 {
    font-family: 'Satisfy', cursive;
  }
  *::-webkit-scrollbar {
    display: none;
  }
  textarea {
    background: ${theme.colours.darkest};
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: ${theme.colours.white};
    font-family: 'News Cycle', sans-serif;
    :focus {
      outline: none;
      border: 1px solid ${theme.colours.green};
    }
  }
  button {
    border-radius: 25px;
    background: ${theme.colours.darkest};
    cursor: pointer;
    outline: none;
  }
`)