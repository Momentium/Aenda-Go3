import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Hashtag from "./Hashtag";
import { hashTagData } from "../../../../data/data";

const Slide = ({ dir, dataIdx, pauseIdx, setPauseIdx }) => {
  const contRef = useRef(undefined);

  useEffect(() => {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    const _div = contRef.current;
    let raf;

    const _1st = _div.childNodes[0];
    const _2nd = _div.childNodes[1];
    _1st.style[dir] = `0px`;
    _1st.style.zIndex = '1';
    _2nd.style[dir] = `${_2nd.clientWidth}px`;
    _2nd.style.zIndex = '1';

    const run = () => {
      let _1stX = Number(_1st.style[dir].replace('px', ''));
      let _2ndX = Number(_2nd.style[dir].replace('px', ''));

      let _state = sessionStorage.getItem(`${dataIdx} state`);
      let _px;
      switch(_state) {
        case 'run':
          window.innerWidth > 480 ? _px = 3 : _px = 1 ;
          
          break;
        case 'slow':
          _px = 1;
          break;
        case 'stop':
          _px = 0;
          break;
        default: break;
      }
  
      if(_1stX < -1 * _1st.clientWidth) {
        _1st.style[dir] = `${_1st.clientWidth}px`;
      }
      else {
        _1st.style[dir] = `${_1stX - _px}px`;
      }
      if(_2ndX < -1 * _2nd.clientWidth) {
        _2nd.style[dir] = `${_2nd.clientWidth}px`;
      }
      else {
        _2nd.style[dir] = `${_2ndX - _px}px`;
      }
      raf = requestAnimationFrame(run);
    }
    raf = requestAnimationFrame(run);
    return () => {
      cancelAnimationFrame(raf)
    }; 
  }, [dir, dataIdx]);


  useEffect(() => {
    if (dataIdx === pauseIdx) {
      sessionStorage.setItem(`${dataIdx} state`, 'stop')
    } else {
      sessionStorage.setItem(`${dataIdx} state`, 'run')
    }
  }, [pauseIdx, dataIdx]);

  const slowSlide = () => {
    if (dataIdx === pauseIdx) return;
    sessionStorage.setItem(`${dataIdx} state`, 'slow')
  };
  const runSlide = () => {
    if (dataIdx === pauseIdx) return;
    sessionStorage.setItem(`${dataIdx} state`, 'run')
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

  @keyframes slide-all-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-3000%);
    }
  }

  @keyframes slide-all-right {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(3000%);
    }
  }
`;

const StHTCont = styled.span`
  position: absolute;
  white-space: nowrap;

  @keyframes slide-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes slide-right {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
