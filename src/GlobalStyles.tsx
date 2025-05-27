import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
  
  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyles;
