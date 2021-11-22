import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import BGwave from '../img/wave.svg';
const GlobalStyle = createGlobalStyle`



  html {
    margin: 0;
    padding: 0;
    background: #D4F1F4 url(${BGwave}) center no-repeat no-repeat;
    height:100%;    
    width:100%;
    background-size: cover;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a {
    text-decoration:none;
  }
  .section{
    margin-left:auto;
    margin-right:auto;
    margin-top:10%;
    opacity:.8;
    width:400px;
    height:500px;
    background:#ffffff;
    border-radius:28px;
    border:1px solid transparent;
    background-image: linear-gradient(#ffffff, #ffffff), 
    linear-gradient(to right, #75E6DA, #189AB4);
    background-origin: border-box;
    background-clip: content-box, border-box;
  
  }

  .marginFild{
    top:140px;
     margin: 0 auto;
  
    
  }
  .next{
    top:280px;
    margin: 0 auto;
   width: 50%;
    
  }
  .source{
    position:relative;
    top:50px;
    left:10px;
    float:left;
  }
  .logo{
    position:absolute;
    width:100px;
    height:100px;
    margin-left:3%;
    // margin-right:auto;
    border-radius:48px;
  }
  h3,h2{
    color:#31687f;
  }
  // questions section
  .Questions ul{
    list-style: none;
    margin: 0 auto;
    padding: 0 0 0 0;

  }

`;
export default GlobalStyle;

export const BtnAnswer = styled.button`
background-color:#D4F1F4;
border:none;
color:#000000;
padding:10px 10px;
`;

export const BtnContainer = styled.div`
  padding:20px;
  justify-content: center;
    min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  & button{
      border-radius:10px;
      padding:20px 20px 20px;
      margin: 0 10px 10px;
        display: flex;
        justify-content: center;
    flex-direction: row;
  }
`;