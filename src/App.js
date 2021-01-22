import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Main from "./components/pages/main/Main";
import Screen from "./components/pages/screen/Screen";
import { MainContxt, VeiwContxt } from "./components/common/ContextStorage";


const App = () => {
  const [WW, setWW] = useState(window.innerWidth);
  const [WH, setWH] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const handleSize = () => {
    setWW(window.innerWidth);
    setWH(window.innerHeight);
  };
  
  const closeMain = () => {
    setTglMain({...tglMain, popState: false});
  };
  const openMain = () => {
    setTglMain({...tglMain, popState: true});
  }
  const [tglMain, setTglMain] = useState({
    popState: true,
    closeMain,
    openMain,
  });

  return (
    <StAppCont classNam="app" WW={WW} WH={WH}>
      <VeiwContxt.Provider value={{WW, WH}}>
      <MainContxt.Provider value={tglMain}>
        <StMainCont WW={WW} WH={WH} popState={tglMain.popState}>
          <Main/>
        </StMainCont>
        <Screen WW={WW} popState={tglMain.popState}/>
      </MainContxt.Provider>
      </VeiwContxt.Provider>
    </StAppCont>
  );
};
export default App;

const StAppCont = styled.div`
  position: relative;

  width: ${props => `${props.WW}px`};
  height: ${props => `${props.WH}px`};
  /* width: 100vw;
  height: 100vh; */

  background-color: #fe573d;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StMainCont = styled.div`
  position: absolute;
  z-index: 10;
  left: 5px;
  bottom: 5px;
  top: 5px;

  transition: all 1s ease;

  ${props => props.popState ?
    css`
      width: ${props => `${props.WW - 10}px`};
      height: ${props => `${props.WH - 10}px`};
      overflow: scroll;
    `
    :
    css`
      width: 16vw;
      height: 8vh;
      overflow: hidden;

      top: ${props => `${props.WH - 10 - (0.08 * props.WH)}px`};
      
      @media screen and (max-width: 768px) {
        width: 40vw;
      }
    `
  }
  
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  background-color: #f2f0ec;
`;
