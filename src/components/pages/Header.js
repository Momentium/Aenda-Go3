import React, { useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";
import { headerData } from '../../data/data'
 
const Header = () => {
  const { popState, closeMain, openMain } = useContext(ThemeContext);

  return (
    <StHeaderCont popState={popState}>
        <StLogoBtnCont className="visible-cont" onClick={openMain}>
          <img
            src={headerData.logo}
            alt="header-logo"
          />
        </StLogoBtnCont>

        <StTitleCont className="invisible-cont">
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

        <StYTBtnCont className="invisible-cont">
          <img
            className="youtube-icon"
            src={headerData.ytIcon}
            alt="youtube-icon"
            onClick={closeMain}
          />
        </StYTBtnCont>

        <StSubTitleCont className="invisible-cont">
          <div className="text header subtitle">
            {
              window.innerWidth > 480 ?
              headerData.txt
              :
              headerData.txt_mobile
            }
          </div>
        </StSubTitleCont>
    </StHeaderCont>
  );
};

export default Header;

const StHeaderCont = styled.div`
  position: relative;
  padding: ${({theme}) => theme.calcVW(87.34)} ${({theme}) => theme.calcVW(100)};

  ${({theme}) => theme.flex('space-between', '', 'column')};

  height: 100%;
  transition: all 0.7s ease;

  .visible-cont {
    transition: all 0.7s ease;
    img {
      transition: all 0.7s ease;
    }
  }

  .invisible-cont {
    overflow: hidden;
    opacity: 1;
    transition: all 1s ease;
  }

  ${(props) =>
    !props.popState &&
    css`
      background: ${props.theme.colors.red};
      padding: ${props.theme.calcVW(15)} ${props.theme.calcVW(14)};
      .visible-cont {
        transition: all 0.5s ease;
        img {
          width: ${props.theme.calcVW(275)};
          height: ${props.theme.calcVW(38.55)};
          @media screen and (min-width: 481px) {
            cursor: pointer;
          }
        }
      }
      .invisible-cont {
        opacity: 0;
        transform: translateY(${props.theme.SH}px);
      }
    `}
`;

const StLogoBtnCont = styled.div`
  img {
    width: ${({theme}) => theme.calcVW(851)};
    @media screen and (max-width: 480px) {
      width: 69vw;
    }
  }
`;

const StYTBtnCont = styled.div`
  img {
    /* transition: all 1s ease; */
    @media screen and (min-width: 481px) {
      cursor: pointer;
    }

    width: ${({theme}) => theme.calcVW(161.05)};
    @media screen and (max-width: 480px) {
      width: 6.875vw;
    }
  }
`;

const StTitleCont = styled.div`
  .blue {
    width: ${({theme}) => theme.calcVW(851)};
    background-color: ${({theme}) => theme.colors.blue};
    color: white;
  }
  .white {
    background-color: white;
    color: ${({theme}) => theme.colors.blue};
  }

  @media screen and (max-width: 480px) {
    .blue {
      width: 100%;
    }
    .white.mobile {
      width: 100%;      
    }
  }
`;

const StSubTitleCont = styled.div`
  color: ${({theme}) => theme.colors.blue};
`;
