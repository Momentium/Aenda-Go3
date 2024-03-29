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
        <div className="invisible-cont text header intro">
          {headerData.subtitle}
        </div>
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
  height: 100%;
  @media screen and (min-width: 481px){
    ${props => props.popState && css`
      min-height: ${props.theme.SW * 0.5}px;
    `}
    padding: ${({theme}) => theme.calcVW(80)} ${({theme}) => theme.calcVW(100)};
    padding-bottom: ${({theme}) => theme.calcVW(56)};
  }
  @media screen and (max-width: 480px){
    padding: ${({theme}) => theme.calcVW_M(49)} ${({theme}) => theme.calcVW_M(17)};
    padding-bottom: ${({theme}) => theme.calcVW_M(32)};
  }

  ${({theme}) => theme.flex('space-between', '', 'column')};


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
      @media screen and (min-width: 481px) {
        padding: ${props.theme.calcVW(15)} ${props.theme.calcVW(14)};  
      }
      @media screen and (max-width: 480px) {
        padding: ${props.theme.calcVW_M(11.89)} ${props.theme.calcVW_M(12.15)};
      }
      .visible-cont {
        transition: all 0.5s ease;
        img {
          @media screen and (min-width: 481px) {
            cursor: pointer;
            width: ${props.theme.calcVW(275)};
            height: ${props.theme.calcVW(38.55)};
          }
          @media screen and (max-width: 480px) {
            width: ${props.theme.calcVW_M(232.03)};
            height: ${props.theme.calcVW_M(31.22)};
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
    display: block;
    
    @media screen and (min-width: 481px) {
      width: ${({theme}) => theme.calcVW(809.6)};
      margin-bottom: ${({theme}) => theme.calcVW(8)};
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      margin-bottom: ${({theme}) => theme.calcVW_M(8)};
    }
  }
`;

const StYTBtnCont = styled.div`
  img {
    @media screen and (min-width: 481px) {
      cursor: pointer;
      width: ${({theme}) => theme.calcVW(122)};
    }
    @media screen and (max-width: 480px) {
      width: ${({theme}) => theme.calcVW_M(106)};
    }
  }
`;

const StTitleCont = styled.div`
  .blue {
    width: ${({theme}) => theme.calcVW(809.6)};
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
