import React, { useState } from "react";
import styled, { css } from "styled-components";
import { mbtiData } from "../../../../data/data";
import { Zoom } from "@material-ui/core";

const ProgramPage = ({ mbti, title, closePage }) => {
  const data = mbtiData[`${mbti}`];

  const [curPage, setCurPage] = useState(0);
  const toLeftPage = () => {
    setCurPage(curPage - 1);
  };
  const toRightPage = () => {
    setCurPage(curPage + 1);
  };

  return (
    <StPageWrap>
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
      <div
        className="line"
        style={{ marginTop: "23px", marginBottom: "40px" }}
      />
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
        {curPage !== 2 && (
          <Zoom in={true} timeout={400}>
            <StArrowWrap dir={"right"} onClick={toRightPage}>
              <img src="assets/icons/vidArrow.svg" alt="arrow-logo" />
            </StArrowWrap>
          </Zoom>
        )}
      </StImgCont>
      <div className="text program subtitle">{data.intro}</div>

      <div className="text program kit-title">예술가의 키트</div>
      <div
        className="line"
        style={{ marginTop: "14px", marginBottom: "33.3px" }}
      />
      <div className="text program kit">{data.kit}</div>

      <img
        className="mbti-icon"
        src={`assets/icons/mbti/${mbti}_orange.svg`}
        alt="mbti-icon"
      />

      <div className="text program kit-intro-title">예술가의 코멘트</div>
      <div className="text program kit-intro">{data.kit_intro}</div>
    </StPageWrap>
  );
};

export default ProgramPage;

const StPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 120px;
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
  }

  .text {
    font-family: "TTSoopilmyungjoR";
  }
  .title {
    font-family: "Noto Sans KR", sans-serif;
  }

  .subtitle {
    margin: 67px 0;
  }

  .kit-title {
  }

  .kit {
    margin-bottom: 48px;
  }

  .mbti-icon {
    width: 60px;
    margin-bottom: 40px;
  }
  /* 
  .kit-intro-title {
    margin-bottom: 16px;
  } */
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
      width: 16px;
      visibility: hidden;
    }
    &.logo {
      height: 32px;
    }
    &.close {
      @media screen and (min-width: 481px) {
        cursor: pointer;
      }
      width: 16px;
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
  transform: ${ props => `translateX(${-1 * props.curPage * props.theme.SW * 0.515625}px)` };
`;

const StArrowWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: 50%;
  @media screen and (max-width: 480px) {
    top: 56px;
  }

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
            left: 13px;
          }
          img {
            transform: translateY(-50%) rotate(180deg);
          }
        `
      : css`
          right: 5vw;
          @media screen and (max-width: 480px) {
            right: 13px;
          }
          img {
            transform: translateY(-50%);
          }
        `};
`;
