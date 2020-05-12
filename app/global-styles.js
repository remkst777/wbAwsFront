import { createGlobalStyle } from 'styled-components';

import reset from './reset-css';

export default createGlobalStyle`
  ${reset};

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i');

  html,
  body {
    width: 100%;
    scroll-behavior: smooth;
    min-height: 100%;
    position: relative;
    font-family: Source Sans Pro, sans-serif;
    overflow-x: hidden;
  }

  button, a {
    cursor: pointer;
    outline: none !important;
    text-decoration: none !important;
  }
  
  #app {
    min-height: 100%;
    min-width: 100%;
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
  }

  #modal > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
  }
`;
