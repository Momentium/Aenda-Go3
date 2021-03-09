import styled from "styled-components";
import { footerData } from '../../../data/data'

const Footer = () => {
  const openLink = (_url) => {
    window.open(_url, "_blank");
  };

  return (
    <StFootCont>
      <StImg src={footerData.logo} alt="footer-logo" />

      <div className="text footer">
        {footerData.host}
        <br />
        {footerData.supervise}
        <br />
        <br />
        {footerData.addr}
        <br />
        {footerData.regist}
        <br />
        {footerData.owner}
      </div>

      {window.innerWidth <= 480 && <><br/><br/></>}

      <StLinkCont>
        <div className="text footer">
          {footerData.email}
          <br />
          {footerData.phone}
          <br />
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
        {/* <br /> */}
      </StLinkCont>
      
      {window.innerWidth <= 480 && <><br/><br/><br/><br/></>}

      <div className="text footer">
        ⓒ 2020 AENDA Inc., All rights reserved.
      </div>
    </StFootCont>
  );
};

export default Footer;

const StFootCont = styled.section`
  background: white;
  ${({theme}) => theme.flex('space-between', 'flex-start', '')}
  border-top: solid 2px ${({theme}) => theme.colors.blue};

  width: 100%;

  padding-top: ${({theme}) => theme.calcVW(75)};
  padding-bottom: ${({theme}) => theme.calcVW(75)};

  & > div {
    margin-top: ${({theme}) => theme.calcVW(5)};
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding-top: ${({theme}) => theme.calcVW_M(50)};
    padding-bottom: ${({theme}) => theme.calcVW_M(50)};
  }
`;

const StImg = styled.img`
  @media screen and (max-width: 480px) {
    width: ${({theme}) => theme.calcVW(260)};
  }
  @media screen and (max-width: 480px) {
    width: ${({theme}) => theme.calcVW_M(260)};
    margin-bottom: ${({theme}) => theme.calcVW_M(40.16)};
  }
`;

const StLinkCont = styled.div`
  @media screen and (min-width: 960px){
    margin-right: 12vw;
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