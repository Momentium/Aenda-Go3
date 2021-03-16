import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Main from "./components/pages/main/Main";
import Screen from "./components/pages/screen/Screen";
import SlidePage from './components/common/SlidePage';

const App = () => {
  const [SW, setSW] = useState(window.innerWidth);
  const [SH, setSH] = useState(window.innerHeight);

  useEffect(() => {
    document.documentElement.addEventListener(
      "touchstart",
      function (event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      },
      false
    );
    let lastTouchEnd = 0;
    document.documentElement.addEventListener(
      "touchend",
      function (event) {
        let now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );
    
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const handleSize = () => {
    setSW(window.innerWidth);
    setSH(window.innerHeight);
  };
  const closeMain = () => {
    setTglMain({ ...tglMain, popState: false });
  };
  const openMain = () => {
    setTglMain({ ...tglMain, popState: true });
  };
  const [tglMain, setTglMain] = useState({
    popState: true,
    closeMain,
    openMain,
  });
  const [popSlide, setPopSlide] = useState(false);
  const [slidePage, setSlidePage] = useState();

  return (
    <ThemeProvider theme={{ ...theme, SW, SH, ...tglMain, popSlide, setPopSlide, setSlidePage}}>
      <StAppCont classNam="app">
        <Main popState={tglMain.popState}/>
        <Screen SW={SW} popState={tglMain.popState} />
        <SlidePage popSlide={popSlide} slidePage={slidePage}/>
      </StAppCont>
    </ThemeProvider>
  );
};
export default App;

const StAppCont = styled.div`
  position: relative;

  width: ${({theme}) => theme.SW}px;
  height: ${({theme}) => theme.SH}px;
`;
