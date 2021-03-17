import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Hashtag from "./Hashtag";
import { hashTagData } from "../../../../data/data";

const Slide = ({ dir, dataIdx, pauseIdx, setPauseIdx }) => {
  const contRef = useRef(undefined);
  useEffect(() => {
    requestAnimationFrame();
  }, []);
  useEffect(() => {
    if (dataIdx === pauseIdx) {
      const _div = contRef.current;
      _div.style.animationPlayState = "paused";
      _div.style.webkitAnimationPlayState = "paused";
      _div.childNodes.forEach((el) => {
        el.style.animationPlayState = "paused";
        el.style.webkitAnimationPlayState = "paused";
      });
    } else {
      const _div = contRef.current;
      _div.style.animationPlayState = "running";
      _div.style.webkitAnimationPlayState = "running";
      _div.childNodes.forEach((el) => {
        el.style.animationPlayState = "running";
        el.style.webkitAnimationPlayState = "running";
      });
    }
  }, [pauseIdx, dataIdx]);

  const [sec, setSec] = useState(10);


  const slowSlide = () => {
    setSec(20);
    if (dataIdx === pauseIdx) return;
    if (window.innerWidth > 480) {
      const _div = contRef.current;
      _div.style.animationPlayState = "paused";
      _div.style.webkitAnimationPlayState = "paused";
    }
  };
  const runSlide = () => {
    setSec(10);
    if (dataIdx === pauseIdx) return;
    if (window.innerWidth > 480) {
      const _div = contRef.current;
      _div.style.animationPlayState = "running";
      _div.style.webkitAnimationPlayState = "running";
    }
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
      <StHTCont dir={dir} sec={sec}>
        {hashTagList}
      </StHTCont>
    </StSlideCont>
  );
};
export default Slide;

const StSlideCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.dir === "left" ? "flex-start" : "flex-end"};
  background: ${({ theme }) => theme.colors.blue};

  @media screen and (min-width: 481px) {
    margin: ${({ theme }) => theme.calcVW(18)} 0;
    /* animation: ${(props) =>
        props.dir === "left" ? "slide-all-left" : "slide-all-right"}
      600s infinite linear; */
  }
  @media screen and (max-width: 480px) {
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
  white-space: nowrap;
  animation: ${(props) => (props.dir === "left" ? "slide-left" : "slide-right")}
    10s infinite linear;

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
