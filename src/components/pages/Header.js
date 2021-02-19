import React, { useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";
import { headerData } from '../../data/data'
 
const Header = () => {
  const { popState, closeMain, openMain } = useContext(ThemeContext);

  return (
    <StHeaderCont popState={popState}>
      <StTopCont popState={popState}>
        <StLogoBtnCont className="header-logo-cont" onClick={openMain}>
          <img
            className="header-logo"
            src={headerData.logo}
            alt="header-logo"
          />
        </StLogoBtnCont>

        <StYTBtnCont onClick={closeMain}>
          <img
            className="youtube-icon"
            src={headerData.ytIcon}
            alt="youtube-icon"
          />
        </StYTBtnCont>
      </StTopCont>

      <StBotCont popState={popState}>
        <StTitleCont>
          <div className="text header title blue">{headerData.blue}</div>
          {
            window.innerWidth > 480 ?
            <div className="text header title white">{headerData.white}</div>
            :
            <>
              <div className="text header title white mobile">{headerData.white_mobile[0]}</div>
              <div className="text header title white">{headerData.white_mobile[1]}</div>
            </>
          }
          
        </StTitleCont>

        <StSubTitleCont>
          <div className="text header subtitle">
            {
              window.innerWidth > 480 ?
              headerData.txt
              :
              headerData.txt_mobile
            }
          </div>
        </StSubTitleCont>
      </StBotCont>
    </StHeaderCont>
  );
};

export default Header;

const StHeaderCont = styled.header`
  position: relative;

  height: 100%;

  & > div {
    width: 100%;
  }

  ${(props) =>
    !props.popState &&
    css`
      background: ${props.theme.colors.red};
    `}
`;

const StTopCont = styled.section`
  position: absolute;
  top: 6.5%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  transition: all 1s ease;

  ${(props) =>
    !props.popState &&
    css`
      padding: 0 8px;

      top: 50%;
      transform: translateY(-50%);

      .header-logo {
        width: 100%;
        @media screen and (min-width: 481px) {
          cursor: pointer;
        }
      }

      .youtube-icon {
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
    width: min(41vw, 395px);
    @media screen and (max-width: 480px) {
      width: 69vw;
      /* width: min(69vw, 166px); */
    }
  }
`;

const StYTBtnCont = styled.div`
  right: 0px;
  display: flex;

  img {
    width: min(4.2vw, 40px);
    @media screen and (max-width: 480px) {
      width: 6.875vw;
    }

    transition: all 1s ease;
    @media screen and (min-width: 481px) {
      cursor: pointer;
    }
  }
`;

const StBotCont = styled.section`
  position: absolute;
  bottom: 6.5%;

  transition: all 1s ease;
  
  ${(props) =>
    props.popState
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          transform: translateY(200%);
        `}
`;

const StTitleCont = styled.div`
  margin-bottom: 3.5vh;

  .blue {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
  }
  .white {
    background-color: white;
    color: ${(props) => props.theme.colors.blue};
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 23vh;
    .blue {
      width: 100%;
    }
    .white.mobile {
      width: 100%;      
    }
  }
`;

const StSubTitleCont = styled.div`
  color: ${(props) => props.theme.colors.blue};
`;
