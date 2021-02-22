import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Hashtag from "./Hashtag";
import { hashTagData } from "../../../data/data";

const Slide = ({ dir, dataIdx, pauseIdx, setPauseIdx }) => {
  const aniRef = useRef();
  useEffect(() => {
    if (dataIdx === pauseIdx) {
      const _div = aniRef.current;
      _div.style.animationPlayState = "paused";
      _div.style.webkitAnimationPlayState = "paused";
      _div.childNodes.forEach((el) => {
        el.style.animationPlayState = "paused";
        el.style.webkitAnimationPlayState = "paused";
      });
    } else {
      const _div = aniRef.current;
      _div.style.animationPlayState = "running";
      _div.style.webkitAnimationPlayState = "running";
      _div.childNodes.forEach((el) => {
        el.style.animationPlayState = "running";
        el.style.webkitAnimationPlayState = "running";
      });
    }
  }, [pauseIdx, dataIdx]);
  const slowSlide = () => {
    if (dataIdx === pauseIdx) return;
    if (window.innerWidth > 480){
      const _div = aniRef.current;
      _div.style.animationPlayState = "paused";
      _div.style.webkitAnimationPlayState = "paused";
    }
  };
  const runSlide = () => {
    if (dataIdx === pauseIdx) return;
    if(window.innerWidth > 480) {
      const _div = aniRef.current;
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
    <StSlideWrap
      dir={dir}
      ref={aniRef}
      onMouseOver={slowSlide}
      onMouseOut={runSlide}
    >
      <span>{hashTagList}</span>
      <span>{hashTagList}</span>
      <span>{hashTagList}</span>
      <span>{hashTagList}</span>
      <span>{hashTagList}</span>
      <span>{hashTagList}</span>
      <span>{hashTagList}</span>
      <span>{hashTagList}</span>
      <span>{hashTagList}</span>
    </StSlideWrap>
  );
};
export default Slide;

const StSlideWrap = styled.div`
  @media screen and (max-width: 480px) {
    margin: 8px 0;
  }

  display: flex;
  justify-content: ${(props) =>
    props.dir === "left" ? "flex-start" : "flex-end"};

  background: ${({ theme }) => theme.colors.blue};

  animation: ${(props) =>
      props.dir === "left" ? "slide-left1" : "slide-right1"}
    120s infinite linear;

  @keyframes slide-left1 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-400%);
    }
  }

  @keyframes slide-right1 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(400%);
    }
  }

  & > span {
    white-space: nowrap;
    animation: ${(props) =>
        props.dir === "left" ? "slide-left" : "slide-right"}
      60s infinite linear;

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
  } 
`;
