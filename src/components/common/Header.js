import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import headerlogo from '../../assets/logo/headerlogo.svg';
import youtube from '../../assets/icons/youtube.svg';
import { MainContxt } from './ContextStorage';

const Header = () => {

  const {popState, closeMain, openMain} = useContext(MainContxt);

  return (
    <StHeaderCont>

      <StTopCont popState={popState}>
        <StLogoBtnCont className="header-logo-cont" onClick={openMain}>
          <img className="header-logo" src={headerlogo} alt="header-logo"/>
        </StLogoBtnCont>

        <StYTBtnCont  onClick={closeMain}>
          <img className="youtube-icon" src={youtube} alt="youtube-icon" />
        </StYTBtnCont>
      </StTopCont>

      <StBotCont popState={popState}>
        <StTitleCont>
          <div className="text header title">반짝반짝 열아홉</div>
          <div className="text header title">나의 취향이 닿는 세계로</div>
        </StTitleCont>

        <StSubTitleCont>
          <div className="text header subtitle">불안하고 흔들리는 청소년기의</div>
          <div className="text header subtitle">마지막 단계를 마무리하고</div>
          <div className="text header subtitle">반짝반짝 빛나는 새로운 시기를 맞이하기 위한 마중물</div>
        </StSubTitleCont>
      </StBotCont>

    </StHeaderCont>
  )
}

export default Header;

const StHeaderCont = styled.header`
  position: relative;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    height: 50%;
  }
  
  & > div {
    width: 100%;
  }
`;

const StTopCont = styled.section`
  /* padding: 0px 6.5%; */
  box-sizing: border-box; 

  position: absolute;
  transform: translateY(100%);
  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  transition: all 1s ease;

  ${ props => !props.popState && css`
    padding: 0 8px;
    transform: translateY(0%);

    top: 2vh;
    @media screen and (max-width: 768px) {
      top: 2.3vh;
    }

    .header-logo {
      width: 100%;
      &:hover {
        cursor: pointer;
      }
    }

    .youtube-icon {
      /* display: none; */
      width: 0em;
      transform: translateX(400%);
    }
  `}

`;

const StLogoBtnCont = styled.div`
  left: 0px;
  display: flex;

  img {
    transition: all 1s ease;
    width: 24.688em;
  }
`;

const StYTBtnCont = styled.div`
  right: 0px;
  display: flex;

  img {
    width: 2.469em;
    transition: all 1s ease;
    &:hover {
      cursor: pointer;
    }
  }
`;

const StBotCont = styled.div`
  padding: 0px 6.5%;
  box-sizing: border-box;

  position: absolute;
  bottom: 0;
  transform: translateY(-65px);

  transition: all 1s ease;
  ${props => props.popState ? 
    css`
      opacity: 1;
    `
    :
    css`
      opacity: 0;
      transform: translateY(200%);
      visibility: collapse;
    ` 
  }
`;

const StTitleCont = styled.div`
  margin-bottom: 3.5vh;
  * {
    /* font-size: 6vw; */
    font-size: 3.750em;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #fe573d;
  }
`;

const StSubTitleCont = styled.div`
  * {
    /* font-size: 2.5vw; */
    font-size: 1.563em;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #fe573d;
  }
`;