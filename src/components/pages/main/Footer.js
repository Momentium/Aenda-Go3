import styled from "styled-components";
import { footerData } from '../../../data/data';

const Footer = () => {
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

      <div></div>
      
      <StIncCont className="inc-cont">
        <div className="text-cont">
          <div className="text footer">
            {footerData.inc}
          </div>
          <div className="text footer aenda">
            {footerData.aenda}
          </div>
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

  width: 100%;
  border-top: solid 2px ${({theme}) => theme.colors.blue};

  @media screen and (min-width: 481px) {
    & > div {
      height: ${({theme}) => theme.calcVW(128)};
    }
    padding-top: ${({theme}) => theme.calcVW(75)};
    padding-bottom: ${({theme}) => theme.calcVW(75)};
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding-top: ${({theme}) => theme.calcVW_M(50)};
    padding-bottom: ${({theme}) => theme.calcVW_M(71)};
  }
`;

const StImg = styled.img`
  @media screen and (min-width: 481px) {
    transform: translateY(${({theme}) => theme.calcVW(-10)});
    width: ${({theme}) => theme.calcVW(280)};
  }
  @media screen and (max-width: 480px) {
    width: ${({theme}) => theme.calcVW_M(260)};
    margin-bottom: ${({theme}) => theme.calcVW_M(50)};
  }
`;

const StHostCont = styled.div`
  .logo-cont {
    ${({theme}) => theme.flex('flex-start', 'center')};
  }

  @media screen and (min-width: 481px) {
    ${({theme}) => theme.flex('space-between', 'flex-start', 'column')};
    .mcst-logo {
      width: ${({theme}) => theme.calcVW(165)};
      margin-right: ${({theme}) => theme.calcVW(25.2)};
    }
    .arte-logo {
      width: ${({theme}) => theme.calcVW(170)};
    }
  }
  @media screen and (max-width: 480px) {
    margin-bottom: ${({theme}) => theme.calcVW_M(50)};
    ${({theme}) => theme.flex('space-between', 'flex-start', 'column')};
    .mcst-logo {
      width: ${({theme}) => theme.calcVW_M(165)};
      margin-right: ${({theme}) => theme.calcVW_M(25.2)};
    }
    .arte-logo {
      width: ${({theme}) => theme.calcVW_M(170)};
    }
  }
`;

const StLinkCont = styled.div`
  table {
    border-collapse: collapse;
  }
  ${({theme}) => theme.flex('space-between', 'flex-start', 'column')};
  
  @media screen and (max-width: 480px) {
    margin-bottom: ${({theme}) => theme.calcVW_M(50)};
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
  ${({theme}) => theme.flex('space-between', '', 'column')};
  .text-cont {
    ${({theme}) => theme.flex('', '', 'column')};
  }

  @media screen and (min-width: 481px) {
    &, .text-cont {
      align-items: flex-end;
    }
    img {
      width: ${({theme}) => theme.calcVW(107)};
    }
  }
  @media screen and (max-width: 480px) {
    &, .text-cont {
      align-items: flex-start;
    }
    img {
      width: ${({theme}) => theme.calcVW_M(107)};
    }
  }
  
`;