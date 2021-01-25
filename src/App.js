import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./components/styles/theme";
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
          {/* <StMainCont> */}
          <Main />
          {/* </StMainCont> */}
          <Screen SW={SW} popState={tglMain.popState} />
        </StAppCont>
    </ThemeProvider>
  );
};
export default App;

const StAppCont = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => `${props.theme.SW}px`};
  height: ${(props) => `${props.theme.SH}px`};
`;

// const StMainCont = styled.div`
//   background-color: ${(props) => props.theme.colors.white};
//   /* background-image: url('/assets/images/bg_img.png'); */

//   position: absolute;
//   z-index: 10;
//   left: 5px;
//   top: 5px;

//   -ms-overflow-style: none;
//   &::-webkit-scrollbar {
//     display: none;
//   }

//   transition: all 1s ease;

//   ${({ theme }) => theme.popState ? 
//     css`
//       width: ${`${theme.SW - 10}px`};
//       height: ${`${theme.SH - 10}px`};
//       overflow: scroll;
//     ` 
//     :
//     css`
//       width: 16vw;
//       height: 8vh;
//       overflow: hidden;

//       top: ${`${theme.SH - 10 - 0.08 * theme.SH}px`};

//       @media screen and (max-width: 768px) {
//         width: 40vw;
//       }
//     `
//   }
// `;
