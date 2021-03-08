import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { mbtiData } from "../../../../data/data";
import { Zoom, } from "@material-ui/core";

const ProgramPage = ({ mbti, title, popSlide, closePage }) => {
  const data = mbtiData[`${mbti}`];
  const [curPage, setCurPage] = useState(0);
  const _closePage = () => {
    setCurPage(0);
    closePage();
  }  
  
  useEffect(() => {
    if(popSlide === "") {
      setCurPage(0);
    }
  }, [popSlide]);

  const toLeftPage = () => {
    setCurPage(curPage - 1);
  };
  const toRightPage = () => {
    setCurPage(curPage + 1);
  };
  return (
    <StPageWrap>
      {window.innerWidth <= 480 && (
        <StMTopCont>
          <img
            className="close" 
            src="assets/icons/close.svg"
            alt="close-icon"
            onClick={_closePage}
          />
        </StMTopCont>
      )}
      <StTopCont>
        <img className="hide" src="assets/icons/close.svg" alt="hidden-icon" />
        <img className="logo" src="assets/logo/red-logo.svg" alt="red-logo" />
        <img
          className="close"
          src="assets/icons/close.svg"
          alt="close-icon"
          onClick={closePage}
        />
      </StTopCont>

      <div className="text program title">{title}</div>
      <div className="line top" />
      <StImgCont>
        {curPage !== 0 && (
          <Zoom in={true} timeout={400}>
            <StArrowWrap dir={"left"} onClick={toLeftPage}>
              <img src="assets/icons/vidArrow.svg" alt="arrow-logo" />
            </StArrowWrap>
          </Zoom>
        )}
        <div></div>
        <div className="prog_img">
          {data.progImg.map((el, idx) => (
            <StImgWrap key={idx} imgUrl={el} curPage={curPage}></StImgWrap>
          ))}
        </div>
        <div></div>
        {curPage !== data.progImg.length - 1 && (
          <Zoom in={true} timeout={400}>
            <StArrowWrap dir={"right"} onClick={toRightPage}>
              <img src="assets/icons/vidArrow.svg" alt="arrow-logo" />
            </StArrowWrap>
          </Zoom>
        )}
      </StImgCont>

      <div className="text program subtitle" >
        {window.innerWidth > 480 ? data.intro : data.intro_m}
      </div>

      <div className="text program kit-title">예술가의 키트</div>
      <div className="line" />
      <div className="text program kit">
        {window.innerWidth > 480 ? data.kit : data.kit_m}
      </div>

      <img
        className="mbti-icon"
        src={`assets/icons/mbti/${mbti}_orange.svg`}
        alt="mbti-icon"
      />

      <div className="text program ment-title">예술가의 코멘트</div>
      <div className="text program ment">
        {window.innerWidth > 480 ? data.ment : data.ment_m}
      </div>
    </StPageWrap>
  );
};

export default ProgramPage;

const StPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${({theme}) => theme.calcVW(101)};
  padding-bottom: 120px;
  @media screen and (max-width: 480px) {
    padding: 30px 0 90px 0;
  }
  box-sizing: border-box;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  background: ${({ theme }) => `${theme.colors.blue}`};

  .line {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => `${theme.colors.red}`};
    margin-top: 23px;
    margin-bottom: 40px;
  }

  .line.top {
    @media screen and (max-width: 480px) {
      background: ${({ theme }) => `${theme.colors.blue}`};
      margin-top: 0px;
      margin-bottom: 65px;
    }
  }

  .subtitle {
    margin: 67px 0;
  }

  .kit {
    margin-bottom: 48px;
  }

  .mbti-icon {
    width: 60px;
    margin-bottom: 40px;
    @media screen and (max-width: 480px) {
      width: 20%;
    }
  }
`;

const StMTopCont = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 56px;
  box-sizing: border-box;
  padding: 0 30px;
  img {
    width: 6.25vw;
  }
`;

const StTopCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 72px;
  box-sizing: border-box;
  padding: 0 54px;

  img {
    &.hide {
      width: ${({theme}) => theme.calcVW(30)};
      visibility: hidden;
    }
    &.logo {
      height: 32px;
    }
    &.close {
      @media screen and (min-width: 481px) {
        cursor: pointer;
      }
      width: ${({theme}) => theme.calcVW(30)};
    }
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    img {
      &.logo {
        width: 71.25vw;
        height: auto;
      }
      &.close,
      &.hide {
        display: none;
      }
    }
  }
`;

const StImgCont = styled.div`
  position: relative;
  width: 100%;
  height: 29.0104vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .prog_img {
    flex-shrink: 0;
    width: 51.5625vw;
    height: 100%;
    overflow: hidden;
    display: flex;
  }

  @media screen and (max-width: 480px) {
    height: ${({ theme }) => theme.SW * 9 / 16}px;
    .prog_img {
      width: ${({ theme }) => theme.SW}px;
    }
  }
`;

const StImgWrap = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  transition: transform 0.5s ease;
  transform: ${(props) =>
    `translateX(${-1 * props.curPage * props.theme.SW * 0.515625}px)`};
  @media screen and (max-width: 480px) {
    transform: ${(props) =>
      `translateX(${-1 * props.curPage * props.theme.SW}px)`};
  }
`;

const StArrowWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: 50%;

  img {
    @media screen and (min-width: 481px) {
      cursor: pointer;
    }
    width: min(6.25vw, 32px);
  }

  ${(props) =>
    props.dir === "left"
      ? css`
          left: 5vw;
          @media screen and (max-width: 480px) {
            left: 26px;
          }
          img {
            transform: translateY(-50%) rotate(180deg);
          }
        `
      : css`
          right: 5vw;
          @media screen and (max-width: 480px) {
            right: 26px;
          }
          img {
            transform: translateY(-50%);
          }
        `};
`;
