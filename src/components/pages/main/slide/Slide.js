import React, { useContext, useEffect, useRef } from "react";
import styled, { ThemeContext } from "styled-components";
import Hashtag from "./Hashtag";
import { hashTagData } from "../../../../data/data";


const Slide = ({ dir, dataIdx, pauseIdx, setPauseIdx }) => {
  const contRef = useRef(undefined);
  const stateRef = useRef('run');
  
  useEffect(() => {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    const _div = contRef.current;

    let raf;
    const _1st = _div.childNodes[0];
    const _2nd = _div.childNodes[1];
    _1st.style[dir] = `0px`;
    _2nd.style[dir] = `${_2nd.clientWidth}px`;

    const run = () => {
      let _1stX = Number(_1st.style[dir].replace('px', ''));
      let _2ndX = Number(_2nd.style[dir].replace('px', ''));

      let _px;

      if(stateRef.current === 'run') {
        if(window.innerWidth > 480) {
          _px = 2;
        }
        else {
          _px = 1;
        }
      }
      else if(stateRef.current === 'slow') {
        _px = 1;
      }
      else if(stateRef.current === 'stop') {
        _px = 0;
      }
  
      if(_1stX <= -1 * _1st.clientWidth) {
        _1st.style[dir] = `${-1 * _px}px`;
        _2nd.style[dir] = `${_2nd.clientWidth - _px}px`;
      }
      else {
        _1st.style[dir] = `${_1stX - _px}px`;
        _2nd.style[dir] = `${_2ndX - _px}px`;
      }
      raf = requestAnimationFrame(run);
    }
    setTimeout(() => { 
      run();
    }, 1000);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (dataIdx === pauseIdx) {
      stateRef.current = 'stop';
    } else {
      stateRef.current = 'run';
    }
  }, [pauseIdx, dataIdx]);

  const slowSlide = () => {
    if (dataIdx === pauseIdx) return;
    if (window.innerWidth <= 480) return;
    stateRef.current = 'slow';
  };
  const runSlide = () => {
    if (dataIdx === pauseIdx) return;
    if (window.innerWidth <= 480) return;
    stateRef.current = 'run';
  };

  const hashTagList = hashTagData[dataIdx].map((el, idx) => {
    return (
      <Hashtag
        key={idx}
        dataIdx={dataIdx}
        setPauseIdx={setPauseIdx}
        pauseIdx={pauseIdx}
        idx={idx}
        tag={el}
      />
    );
  });

  return (
    <StSlideCont
      dir={dir}
      ref={contRef}
      onMouseOver={slowSlide}
      onMouseOut={runSlide}
    >
      <StHTCont dir={dir}>
        {hashTagList}
      </StHTCont>
      <StHTCont dir={dir}>
        {hashTagList}
      </StHTCont>
    </StSlideCont>
  );
};
export default Slide;

const StSlideCont = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.dir === "left" ? "flex-start" : "flex-end"};
  background: ${({ theme }) => theme.colors.blue};

  @media screen and (min-width: 481px) {
    height: ${({ theme }) => theme.calcVW(50)};
    margin: ${({ theme }) => theme.calcVW(18)} 0;
  }
  @media screen and (max-width: 480px) {
    height: ${({ theme }) => theme.calcVW_M(50)};
    margin: ${({ theme }) => theme.calcVW_M(8)} 0;
  }

`;

const StHTCont = styled.span`
  position: absolute;
  white-space: nowrap;
`;
