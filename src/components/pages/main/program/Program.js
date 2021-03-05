import React, { useState } from "react";
import styled from "styled-components";

const Program = ({ data, openPage }) => {
  // const [img, setImg] = useState(data.img);
  // const mouseOnImg = () => {
  //   setImg(data.hovImg);
  // };
  // const mouseOutImg = () => {
  //   setImg(data.img);
  // };

  return (
    <StProgramWrap
      className={`${data.mbti} ${data.title}`}
      mbti={data.mbti}
      onClick={openPage}
      // onMouseOver={mouseOnImg}
      // onMouseOut={mouseOutImg}
    >
      {/* <img className={`${data.mbti}`} src={img} alt={`${data.mbti}-icon`} /> */}
      <StImgCont>
        <img className={`${data.mbti} orange`} src={data.hovImg} alt={`${data.mbti}-icon`} />
        <img className={`${data.mbti} blue`} src={data.img} alt={`${data.mbti}-icon`} />
      </StImgCont>
      <div className="text program label">{data.title}</div>
    </StProgramWrap>
  );
};
export default Program;

const StProgramWrap = styled.div`
  @media screen and (min-width: 481px) {
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 300px;
  
  width: 15.6vw;
  height: 17vw;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  img {
    height: 11.25vw;
    @media screen and (max-width: 480px) {
      height: 30vw;
      margin-bottom: 30px;
    }
  }
  
  .label {
    width: 100%;
    height: 3.6vw;
    @media screen and (max-width: 480px) {
      height: 40px;
    }
    background: ${({ theme }) => theme.colors.blue};

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    transition: all 0.1s linear;
  }
  transition: all 0.1s linear;

  &:hover {
    .text {
      background: ${({ theme }) => theme.colors.red};
    }
    .blue {
     opacity: 0;
    }
    .orange {
     opacity: 1;
    }
    transform: translateY(-1.8vw);
  }
`;

const StImgCont = styled.div`
  display: flex;
  position: relative;
  img {
    position: absolute;
    transform: translateX(-50%);
    left:0;
    top: 0;
    height: 11.25vw;
    @media screen and (max-width: 480px) {
      height: 30vw;
      margin-bottom: 30px;
    }
  }
  .blue {
    z-index: 21;
    opacity: 1;
  }
  .orange {
    z-index: 20;
    opacity: 0;
  }
`;