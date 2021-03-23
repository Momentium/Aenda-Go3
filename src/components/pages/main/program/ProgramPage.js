import React, { useState, } from "react";
import styled, { css, } from "styled-components";
import { mbtiData } from "../../../../data/data";
import { Zoom, } from "@material-ui/core";

const ProgramPage = ({ mbti, title, closePage }) => {
  const arrowImgUrl = window.innerWidth > 480 ? `vidArrow.svg` : `vidArrow_m.svg`;
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
              <img src={`assets/icons/${arrowImgUrl}`} alt="arrow-logo" />
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
              <img src={`assets/icons/${arrowImgUrl}`} alt="arrow-logo" />
            </StArrowWrap>
          </Zoom>
        )}
      </StImgCont>

      <div className="text program subtitle" >
        {window.innerWidth > 480 ? data.intro : data.intro_m}
      </div>

      <div className="text program kit-title">{`'${data.artist[0]}. ${data.artist[1]}'`}의 키트</div>

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
  ${({theme}) => theme.flex('', 'center', 'column')}
  background: ${({ theme }) => `${theme.colors.blue}`};

  width: 100%;
  min-height: 100%;

  @media screen and (min-width: 481px) {
    padding-top: ${({theme}) => theme.calcVW(101)};
    padding-bottom: ${({theme}) => theme.calcVW(172)};
  }
  @media screen and (max-width: 480px) {
    padding-top: ${({theme}) => theme.calcVW_M(35)};
    padding-bottom: ${({theme}) => theme.calcVW_M(98.29)};
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
        height: 0;
        margin-bottom: ${({theme}) => theme.calcVW_M(41)};
      }
    }
    &.bot {
      @media screen and (min-width: 481px) {
        margin-top: ${({theme}) => theme.calcVW(30.5)};
        margin-bottom: ${({theme}) => theme.calcVW(66.5)};
      }
      @media screen and (max-width: 480px) {
        margin-top: ${({theme}) => theme.calcVW_M(25.42)};
        margin-bottom: ${({theme}) => theme.calcVW_M(40.52)};
      }
    }
  }

  .subtitle {
    @media screen and (min-width: 481px) {
      margin-top: ${({theme}) => theme.calcVW(101)};
      margin-bottom: ${({theme}) => theme.calcVW(113)};
    }
    @media screen and (max-width: 480px) {
      margin-top: ${({theme}) => theme.calcVW_M(80)};
      margin-bottom: ${({theme}) => theme.calcVW_M(73)};
    }
  }

  .mbti-icon {
    @media screen and (min-width: 481px) {
      width: ${({theme}) => theme.calcVW(96)};
      margin-top: ${({theme}) => theme.calcVW(84)};
      margin-bottom: ${({theme}) => theme.calcVW(90)};
    }
    @media screen and (max-width: 480px) {
      width: ${({theme}) => theme.calcVW_M(96)};
      margin-top: ${({theme}) => theme.calcVW_M(60)};
      margin-bottom: ${({theme}) => theme.calcVW_M(60)};
    }
  }
`;

const StMTopCont = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: ${({theme}) => theme.calcVW_M(68.5)};
  padding: 0 ${({theme}) => theme.calcVW_M(32)};
  img {
    width: ${({theme}) => theme.calcVW_M(30)};
  }
`;

const StTopCont = styled.div`
  ${({theme}) => theme.flex('space-between', 'flex-end')}
  width: 100%;
  padding: 0 ${({theme}) => theme.calcVW(106)};

  @media screen and (min-width: 481px) {
    margin-bottom: ${({theme}) => theme.calcVW(64)};
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
    margin-bottom: ${({theme}) => theme.calcVW_M(67.11)};
    img {
      &.logo {
        width: ${({theme}) => theme.calcVW_M(343.33)};
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

  transition: opacity 0.4s ease-in;
  ${({theme}) => theme.popSlide ? 
    css`opacity: 1;`
    :
    css`opacity: 0;`
  }

  .prog_img {
    overflow: hidden;
    white-space: nowrap;
    background: black;
  }

  @media screen and (min-width: 481px) {
    height: ${({theme}) => theme.calcVW(557)};
    .prog_img {
      width: ${({theme}) => theme.calcVW(990)};
      height: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    height: ${({ theme }) => theme.calcVW_M(270)};
    .prog_img {
      width: 100%;
      height: 100%;
    }
  }
`;

const StImg = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 481px) {
    transition: transform 0.5s ease;
    transform: translateX(${(props) => props.theme.calcVW(-1 * props.curImg * 990)});
  }
  @media screen and (max-width: 480px) {
    transition: transform 0.3s ease;
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
      width: ${({theme}) => theme.calcVW(66)};
    }
    @media screen and (max-width: 480px) {
      width: ${({theme}) => theme.calcVW_M(20)};
    }
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
            left: ${({theme}) => theme.calcVW_M(32)};
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
            right: ${({theme}) => theme.calcVW_M(32)};
          }
        `};
`;
