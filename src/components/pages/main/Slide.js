import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Hashtag from './Hashtag';
import { getTranslateX } from '../../../api/method';
import { hashTagData } from '../../../assets/data';

const Slide = ({ selectMBTI, dataIdx, dir }) => {
  const [isHover, setIsHover] = useState(false);

  const slideRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // useEffect(() => {
  //   setInterval(moveSlide, 1000);
  //   return () => { 
  //     clearInterval(moveSlide);
  //   }
  // }, [])

  const moveSlide = () => {
    // const _slideRef = slideRef.current.clientWidth;
    // console.log(_slideRef)
    // const _tagRef = slideRef.current.childNodes;

    // if(dir === 'left') {
    //   _tagRef.forEach((el, idx) => {
    //     const _x = getTranslateX(el);
    //       el.style.transform = `translateX(${_x - 300}px)`;
    //     }
    //   )
      
    //   const _headTag = _tagRef[0].getBoundingClientRect();
    //   if(_headTag.left <= -1*(_headTag.width)) {
    //     // _tagRef.forEach((el, idx) => {
    //     //     el.style.transform = `translateX(0px)`;
    //     //   }
    //     // )
    //     slideRef.current.append(_tagRef[0]);
    //   }

    // }
    // else {
    //   _tagRef.forEach((el, idx) => {
    //     const _x = getTranslateX(el);
    //       el.style.transform = `translateX(${_x + 100}px)`;
    //     }
    //   )
    // }
    
  }



  const slowSlide = (e) => {
    setIsHover(true);
  };
  const faseSlide = (e) => {
    setIsHover(false);
  };

  const hashTagList = hashTagData[dataIdx].map((el, idx) => {
    return (
      <Hashtag key={idx} dataIdx={dataIdx} idx={idx} tag={el} selectMBTI={selectMBTI}/>
    )
  });

  return (
    <StSlideWrap 
      dir={dir === "left"} 
      ref={slideRef}
      isHover={isHover}
      onMouseOver={slowSlide} 
      onMouseOut={faseSlide} 
    >

      <StHashTagCont dir={dir === "left"}  className="1">
        {hashTagList}
      </StHashTagCont>
      <StHashTagCont dir={dir === "left"}  className="2">
        {hashTagList}
      </StHashTagCont>
      <StHashTagCont dir={dir === "left"}  className="3">
        {hashTagList}
      </StHashTagCont>
      <StHashTagCont dir={dir === "left"}  className="4">
        {hashTagList}
      </StHashTagCont>
    </StSlideWrap>
  )
}
export default Slide;

const StSlideWrap = styled.div`
  display: flex;
  justify-content: ${props => props.dir ? "flex-start" : "flex-end"};
  /* justify-content: center; */
  /* flex-wrap: nowrap; */

  background: ${({ theme }) => theme.colors.blue}; 

  transition: 5s linear ;
  transform: ${ props => props.dir ? "translateX(-20%)" : "translateX(20%)" };
  &:hover {
    transform: translateX(0%);
  }
`;

const StHashTagCont = styled.div`
  white-space: nowrap;
  /* transition: all 0.3s linear; */
  animation: ${props => props.dir ? "slide-left" : "slide-right"} 20s infinite linear;

  @keyframes slide-left{
    0%   { transform: translateX(0%) }
    100% { transform: translateX(-100%) }  
  }
  @keyframes slide-right{
    0%   { transform: translateX(0%) }
    100% { transform: translateX(100%) }  
  }
`;
