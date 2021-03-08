import styled from "styled-components";
import { footerData } from '../../../data/data'

const Footer = () => {
  const openLink = (_url) => {
    window.open(_url, "_blank");
  };

  return (
    <StFootCont>
      <StImg src={footerData.logo} alt="footer-logo" />

      <StInfoCont>
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
          {/* <br />
          <br /> */}
        </div>
      </StInfoCont>

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

      {/* <StIncCont> */}
        <div className="text footer">
          ⓒ 2020 AENDA Inc., All rights reserved.
        </div>
      {/* </StIncCont> */}
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
    padding-top: 36px;
    padding-bottom: 36px;
  }
`;

const StImg = styled.img`
  width: ${({theme}) => theme.calcVW(260)};
  @media screen and (max-width: 480px) {
    width: min(54vw, 260px);
    margin-bottom: 36px;
  }
`;

const StInfoCont = styled.div`
`;

const StLinkCont = styled.div`
  @media screen and (min-width: 960px){
    margin-right: 12vw;
  }

  table {
    border-collapse: collapse;
  }
  img {
    height: ${({theme}) => theme.calcVW(18)};
    @media screen and (max-width: 480px) {
      height: min(3.875vw, 18.6px);
    }
    margin-right: ${({theme}) => theme.calcVW(8)};
  }
`;

// const StIncCont = styled.div`
// `;
