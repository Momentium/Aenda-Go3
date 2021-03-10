import React, { useState } from "react";
import styled, { css } from "styled-components";
import { mbtiData } from "../../../../data/data";
import { Zoom, } from "@material-ui/core";

const ProgramPage = ({ mbti, title, popSlide, closePage }) => {
  const data = mbtiData[`${mbti}`];
  const [curImg, setCurImg] = useState(0);
  const _closePage = () => {
    setCurImg(0);
    closePage();
  }  
  
  const toLeftPage = () => {
    setCurImg(curImg - 1);
  };
  const toRightPage = () => {
    setCurImg(curImg + 1);
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
          onClick={_closePage}
        />
      </StTopCont>

      <div className="text program title">{title}</div>

      <div className="line top" />

      <StImgCont>
        {curImg !== 0 && (
          <Zoom in={true} timeout={400}>
            <StArrowWrap dir={"left"} onClick={toLeftPage}>
              <img src="assets/icons/vidArrow.svg" alt="arrow-logo" />
            </StArrowWrap>
          </Zoom>
        )}
        <div></div>
        <div className="prog_img">
          {data.progImg.map((el, idx) => (
            <StImg key={idx} src={el} alt={el} curImg={curImg}/>
          ))}
        </div>
        <div></div>
        {curImg !== data.progImg.length - 1 && (
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

      <div className="line bot" />

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
  ${({theme}) => theme.flex('center', 'center', 'column')}
  background: ${({ theme }) => `${theme.colors.blue}`};

  width: 100%;
  @media screen and (min-width: 481px) {
    padding-top: ${({theme}) => theme.calcVW(101)};
    padding-bottom: 120px;
  }
  @media screen and (max-width: 480px) {
    padding: 30px 0 90px 0;
  }

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .line {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => `${theme.colors.red}`};
    &.top {
      @media screen and (min-width: 481px) {
        margin-top: ${({theme}) => theme.calcVW(44.5)};
        margin-bottom: ${({theme}) => theme.calcVW(78.5)};
      }
      @media screen and (max-width: 480px) {
        background: ${({ theme }) => `${theme.colors.blue}`};
        margin-top: 0px;
        margin-bottom: 65px;
      }
    }
    &.bot {
      @media screen and (min-width: 481px) {
        margin-top: ${({theme}) => theme.calcVW(30.5)};
        margin-bottom: ${({theme}) => theme.calcVW(66.5)};
      }
    }
  }

  .subtitle {
    margin-top: ${({theme}) => theme.calcVW(101)};
    margin-bottom: ${({theme}) => theme.calcVW(113)};
  }

  .mbti-icon {
    @media screen and (min-width: 481px) {
      width: ${({theme}) => theme.calcVW(96)};
      margin-top: ${({theme}) => theme.calcVW(84)};
      margin-bottom: ${({theme}) => theme.calcVW(90)};
    }
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
  ${({theme}) => theme.flex('space-between', 'flex-end')}
  width: 100%;
  padding: 0 ${({theme}) => theme.calcVW(106)};
  margin-bottom: ${({theme}) => theme.calcVW(64)};

  @media screen and (min-width: 481px) {
    img {
      &.hide {
        width: ${({theme}) => theme.calcVW(30)};
        visibility: hidden;
      }
      &.logo {
        width:${({theme}) => theme.calcVW(360)};
      }
      &.close {
        @media screen and (min-width: 481px) {
          cursor: pointer;
        }
        width: ${({theme}) => theme.calcVW(30)};
      }
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
  ${({theme}) => theme.flex('center', 'center')}
  width: 100%;

  .prog_img {
    overflow: hidden;
    white-space: nowrap;
  }

  @media screen and (min-width: 481px) {
    height: ${({theme}) => theme.calcVW(557)};
    .prog_img {
      width: ${({theme}) => theme.calcVW(990)};
    }
  }

  @media screen and (max-width: 480px) {
    height: ${({ theme }) => theme.SW * 9 / 16}px;
    .prog_img {
      width: ${({ theme }) => theme.SW}px;
    }
  }
`;

const StImg = styled.img`
  width: 100%;
  height: 100%;

  transition: transform 0.5s ease;
  @media screen and (min-width: 481px) {
    transform: translateX(${(props) => props.theme.calcVW(-1 * props.curImg * 990)});
  }
  @media screen and (max-width: 480px) {
    transform: translateX(${(props) => -1 * props.curImg * props.theme.SW}px);
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
    width: ${({theme}) => theme.calcVW(66)};
  }

  ${(props) =>
    props.dir === "left"
      ? css`
          img {
            transform: translateY(-50%) rotate(180deg);
          }
          @media screen and (min-width: 481px) {
            left: ${({theme}) => theme.calcVW(90.5)};
          }
          @media screen and (max-width: 480px) {
            left: 26px;
          }
        `
      : css`
          img {
            transform: translateY(-50%);
          }
          @media screen and (min-width: 481px) {
            right: ${({theme}) => theme.calcVW(90.5)};
          }
          @media screen and (max-width: 480px) {
            right: 26px;
          }
        `};
`;
