import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root{
    height: 100vh;
    background: #61006D;

  }

  body{
    
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }

  body, input, button, textarea{
    font: 16px 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }
  
  button{
    cursor: pointer;
  }
`;
