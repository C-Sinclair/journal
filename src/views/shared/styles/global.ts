import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
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
`