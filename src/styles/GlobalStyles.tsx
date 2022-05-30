import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *  {
    box-sizing: border-box;
    -webkit-tap-highlight-color:transparent;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    -webkit-appearance: none; /* iOS box-shadow */
  }

  html {
    font-size:62.5%; // for easily calculate px-rem
  }

  a {
    text-decoration-line:none;
    color:#2883f3;
  }

  ul {
    list-style:none;
  }

  button{
    border:none;
    outline:none;
    background: none;
    padding:0;
    cursor: pointer;
    user-select:none;
  }

  body{
    overflow:auto;
    touch-action: pan-y;

    min-height: 100vh;
    
    /* ios vh issue fix */
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
        min-height: -webkit-fill-available;
    }
  }

  /* modal opened, prevent scrolling */
  body.modal_opened {
    overflow:hidden;
    touch-action:none;
  }

  input{
    border:none;
    outline:none;
    background:none;
  }

  /* webkit input padding off */
  form input #submit { 
    -webkit-appearance:none;  
    -webkit-border-radius:0px;
    margin:0;  
    padding:0;  
    display:block;
  }

  /* ios select style reset */
  select {
    -webkit-appearance: none;
    -moz-appearance: none; 
    appearance: none;
  }

`;

export default GlobalStyle;
