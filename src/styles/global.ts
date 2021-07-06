import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background: rgb(201, 201, 201, 0.35);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding-top: 40px;
    display: flex;
    align-itens: center;
    justify-content: center;
  }
  
  button {
    cursor: pointer;
  }

`;