import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Main from "./components/pages/main/Main";
import Screen from "./components/pages/screen/Screen";

const App = () => {
  const [SW, setSW] = useState(window.innerWidth);
  const [SH, setSH] = useState(window.innerHeight);

  useEffect(() => {
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

  return (
    <ThemeProvider theme={{ ...theme, SW, SH, ...tglMain }}>
        <StAppCont classNam="app">
          <Main />
          <Screen SW={SW} popState={tglMain.popState} />
        </StAppCont>
    </ThemeProvider>
  );
};
export default App;

const StAppCont = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  
  position: relative;

  width: ${(props) => `${props.theme.SW}px`};
  height: ${(props) => `${props.theme.SH}px`};
`;
