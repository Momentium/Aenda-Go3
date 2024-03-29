import React, { useEffect, useRef } from "react";
import styled, {css} from "styled-components";
import Hashtag from "./Hashtag";
import { hashTagData } from "../../../../data/data";

const Slide = ({ dir, dataIdx, pauseIdx, setPauseIdx, isOpen }) => {
  const contRef = useRef(undefined);
  const stateRef = useRef('run');
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
  
  useEffect(() => {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    const _div = contRef.current;

    let raf;
    const _1st = _div.childNodes[0];
    const _2nd = _div.childNodes[1];
    
    const run = () => {
      if(!window.getComputedStyle(_1st).transform) return;

      let _px = 1;
      if(stateRef.current === 'run') {
        if(window.innerWidth > 480) {
          _px = 3;
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
      else if(stateRef.current === 'tab') {
        _px = 0;
      }

      let _1stX = window.getComputedStyle(_1st).transform.match(/matrix.*\((.+)\)/)[1].split(', ')[4]
      let _2ndX = window.getComputedStyle(_2nd).transform.match(/matrix.*\((.+)\)/)[1].split(', ')[4]

      const _1stXX = Number(_1stX);
      const _2ndXX = Number(_2ndX);
      if(dir === 'left') {
        if(stateRef.current === 'tab') {
          _1st.style.transition = `transform 0.3s ease`;
          _2nd.style.transition = `transform 0.3s ease`;
          _1st.style.transform = `translateX(${0}px)`;
          _2nd.style.transform = `translateX(${0}px)`;
        }
        else {
          _1st.style.transition = ``;
          _2nd.style.transition = ``;
          if(_1stXX <= -1 * _1st.offsetWidth) {
            _1st.style.transform = `translateX(${-1 * _px}px)`;
            _2nd.style.transform = `translateX(${-1 * _px}px)`;
          }
          else {
            _1st.style.transform = `translateX(${_1stXX - _px}px)`;
            _2nd.style.transform = `translateX(${_2ndXX - _px}px)`;
          }
        }
      }
      else {
        if(_1stXX >= _1st.offsetWidth) {
          _2nd.style.transform = `translateX(${_px}px)`;
          _1st.style.transform = `translateX(${_px}px)`;
        }
        else {
          _2nd.style.transform = `translateX(${_2ndXX + _px}px)`;
          _1st.style.transform = `translateX(${_1stXX + _px}px)`;
        }
      }
      raf = requestAnimationFrame(run);
    }
    setTimeout(() => { 
      run();
    }, 1000);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [dir]);

  useEffect(() => {
    if (isOpen && dataIdx === 2 && pauseIdx === -1) {
      stateRef.current = 'tab';
    }
    else {
      if (dataIdx === pauseIdx) {
        stateRef.current = 'stop';
      } else {
        stateRef.current = 'run';  
      }
    }
  }, [pauseIdx, dataIdx, isOpen]);

  const slowSlide = () => {
    if (dataIdx === pauseIdx) return;
    if (stateRef.current === 'tab') return;
    if (window.innerWidth <= 480) {
      stateRef.current = 'run';
    }
    else {
      stateRef.current = 'slow';
    }
  };
  const runSlide = () => {
    if (dataIdx === pauseIdx) return;
    if (stateRef.current === 'tab') return;
    stateRef.current = 'run';
  };
  
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
    margin: ${({ theme }) => theme.calcVW(18)} 0;
  }
  @media screen and (max-width: 480px) {
    margin: ${({ theme }) => theme.calcVW_M(8)} 0;
  }

`;

const StHTCont = styled.span`
  white-space: nowrap;
  transform: translateX(0px);
`;
