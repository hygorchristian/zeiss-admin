import { createGlobalStyle } from 'styled-components';

import regular from '../assets/fonts/ZEISS Frutiger Next W1G Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Zeiss';
    src: url('${regular}')  
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  
  html, body, #root{
    height: 100%;
  }
  
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Zeiss', serif;
  }
  
  
  input{
    height: 40px;
    border: none;
    background-color: #f8f8f8;
    border-radius: 3px;
    padding-left: 17px;
    font-size: 14px;
    font-weight: 200;
  }
  
  button{  
    height: 40px;
    border-radius: 3px;
    border: none;
    background-color: #018BD0;  
    color: #ffffff;  
    font-weight: 600;
    font-size: 14px;
    transition: all 150ms ease-in-out;
    cursor: pointer;
    
    &:active{
      opacity: 0.6;
    }
  }
`;
