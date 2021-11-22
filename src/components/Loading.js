import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const Spinner = styled.div`

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
content: '';
box-sizing: border-box;
position: absolute;
top: 35%;
left: 50%;
width: 200px;
height: 200px;
// margin-top: -10px;
// margin-left: -10px;
border-radius: 50%;
border-top: 2px solid #D4F1F4;
border-right: 2px solid transparent;
animation: spinner .6s linear infinite;
`;


const Loading = () => {
  return (
    <main>
      <GlobalStyle/>
      <Spinner></Spinner>
    </main>
  )
}

export default Loading