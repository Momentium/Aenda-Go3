import React, { useEffect, useContext } from 'react';
import styled, { ThemeContext } from "styled-components";
import { footerData } from '../../../data/data'

const Footer = () => {
  const { SW } = useContext(ThemeContext);
  useEffect(() => {
    const _host = document.querySelector('.host-cont');
    const _logo = document.querySelector('.logo-cont');
    _logo.style.width = `${_host.clientWidth}px`;

    if (window.innerWidth <= 480) return;

    const _link = document.querySelector('.link-cont');
    _host.style.height = `${_link.clientHeight}px`;
    const _inc = document.querySelector('.inc-cont');
    _inc.style.height = `${_link.clientHeight}px`;

  }, [SW]);

  const openLink = (_url) => {
    window.open(_url, "_blank");
  };

  return (
    <StFootCont>
      <StImg src={footerData.logo} alt="footer-logo" />

      <StHostCont className="host-cont">
        <div className="text footer">
          {footerData.addr[0]}
          <br />
          {footerData.addr[1]}
        </div>
        <br />
        <div className="logo-cont">
          <img className="mcst-logo" src="/assets/logo/mcst-logo.png" alt=""/>
          <img className="arte-logo" src="/assets/logo/arte-logo.png" alt=""/>
        </div>
      </StHostCont>

      <StLinkCont className="link-cont">
        <div className="text footer">
          {footerData.email}
          <br />
          {footerData.phone}
          <br />
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <div style={{ display: "flex" }}>
                  <img src={footerData.sns.insta.icon} alt="instagram-logo" />
                </div>
              </td>
              <td>
                <div
                  className="text footer link"
                  onClick={() =>
                    openLink(footerData.sns.insta.link)
                  }
                >
                  {footerData.sns.insta.label}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: "flex" }}>
                  <img src={footerData.sns.facebook.icon} alt="instagram-logo" />
                </div>
              </td>
              <td>
                <div
                  className="text footer link"
                  onClick={() =>
                    openLink(footerData.sns.facebook.link)
                  }
                >
                  {footerData.sns.facebook.label}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </StLinkCont>
      
      <StIncCont className="inc-cont">
        <div className="text footer">
          {footerData.inc}
        </div>
        <div className="text footer aenda">
          {footerData.aenda}
        </div>
        <br/> 
        <img src="/assets/logo/open-logo.png" alt=""/>
      </StIncCont>
    </StFootCont>
  );
};

export default Footer;

const StFootCont = styled.section`
  background: white;
  ${({theme}) => theme.flex('space-between', 'flex-start', '')}
  border-top: solid 2px ${({theme}) => theme.colors.blue};

  width: 100%;

  & > div {
    margin-top: ${({theme}) => theme.calcVW(5)};
  }
  @media screen and (min-width: 481px) {
    padding-top: ${({theme}) => theme.calcVW(75)};
    padding-bottom: ${({theme}) => theme.calcVW(75)};
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding-top: ${({theme}) => theme.calcVW_M(50)};
    padding-bottom: ${({theme}) => theme.calcVW_M(50)};
  }
`;

const StImg = styled.img`
  @media screen and (min-width: 481px) {
    width: ${({theme}) => theme.calcVW(280)};
  }
  @media screen and (max-width: 480px) {
    width: ${({theme}) => theme.calcVW_M(260)};
    margin-bottom: ${({theme}) => theme.calcVW_M(50)};
  }
`;

const StHostCont = styled.div`
  .logo-cont {
    ${({theme}) => theme.flex('space-between', 'center')};
  }

  @media screen and (min-width: 481px) {
    ${({theme}) => theme.flex('space-between', 'flex-start', 'column')};
    .mcst-logo {
      width: ${({theme}) => theme.calcVW(165)};
    }
    .arte-logo {
      width: ${({theme}) => theme.calcVW(170)};
    }
  }
  @media screen and (max-width: 480px) {
    margin-bottom: ${({theme}) => theme.calcVW_M(50)};
    ${({theme}) => theme.flex('', 'flex-start', 'column')};
    .mcst-logo {
      width: ${({theme}) => theme.calcVW_M(165)};
    }
    .arte-logo {
      width: ${({theme}) => theme.calcVW_M(170)};
    }
  }
`;

const StLinkCont = styled.div`
  @media screen and (min-width: 960px){
    margin-right: 12vw;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: ${({theme}) => theme.calcVW_M(50)};
  }

  table {
    border-collapse: collapse;
  }
  img {
    @media screen and (min-width: 481px) {
      height: ${({theme}) => theme.calcVW(18)};
      margin-right: ${({theme}) => theme.calcVW(10)};
    }
    @media screen and (max-width: 480px) {
      height: ${({theme}) => theme.calcVW_M(18.64)};
      margin-right: ${({theme}) => theme.calcVW_M(10)};
    }
  }
`;

const StIncCont = styled.div`
  @media screen and (min-width: 481px) {
    ${({theme}) => theme.flex('space-between', 'flex-end', 'column')};
    img {
      width: ${({theme}) => theme.calcVW(107)};
    }
  }
  @media screen and (max-width: 480px) {
    ${({theme}) => theme.flex('space-between', 'flex-start', 'column')};
    img {
      width: ${({theme}) => theme.calcVW_M(107)};
    }
  }
  
`;