import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Main from './components/pages/main/Main';

const App = () => {
  const [WW, setWW] = useState(window.innerWidth);
  const [WH, setWH] = useState(window.innerHeight);
  
  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    }  
  }, [])
  
  const handleSize = () => {
    setWW(window.innerWidth);
    setWH(window.innerHeight);
  }

  return (
    <StAppCont classNam="app" WW={WW} WH={WH}>
      <div className="main-cont">        
        <Main />
      </div>
    </StAppCont>
  );
}
export default App;

const StAppCont = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-color: #fe573d;

  display: flex;
  justify-content: center;
  align-items: center;

  .main-cont {
    position: absolute;
    z-index: 10;

    width: ${props => `${props.WW - 10}px`};
    @media screen and (min-width: 768px) {
      height: ${props => `${props.WH - 10}px`};
    }
    

    left: 5px;
    bottom: 5px;

    overflow: scroll;
    -ms-overflow-style: none; 
    &::-webkit-scrollbar { 
      display: none; 
    }

    background-color: #f2f0ec;
  }
`;