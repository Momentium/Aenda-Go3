import styled from "styled-components";

const Footer = () => {
  const openLink = (_url) => {
    window.open(_url, "_blank");
  };

  return (
    <StFootCont>
      <StImgWrap>
        <img src="assets/logo/footer-logo.svg" alt="footer-logo" />
      </StImgWrap>

      <StInfoCont>
        <div className="text footer">
          주최. 문화체육관광부
          <br />
          주관. 한국문화예술교육진흥원
          <br />
          <br />
          (주)앤다 서울시 중구 정동길 12-11 카리스타워 2층
          <br />
          사업자등록번호 211-88-69418
          <br />
          개인정보보호책임자 이상진
          <br />
          <br />
        </div>
      </StInfoCont>

      <StLinkCont>
        <div className="text footer">
          go310000@naver.com
          <br />
          02) 549-2234
          <br />
          <br />
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <div style={{ display: "flex" }}>
                  <img src="assets/icons/instagram.svg" alt="instagram-logo" />
                </div>
              </td>
              <td>
                <div
                  className="text footer link"
                  onClick={() =>
                    openLink("https://www.instagram.com/go3.gold/")
                  }
                >
                  Instagram
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: "flex" }}>
                  <img src="assets/icons/facebook.svg" alt="instagram-logo" />
                </div>
              </td>
              <td>
                <div
                  className="text footer link"
                  onClick={() =>
                    openLink("https://www.facebook.com/sangsanggo3")
                  }
                >
                  Facebook
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </StLinkCont>

      <StIncCont>
        <div className="text footer">
          ⓒ 2020 AENDA Inc., All rights reserved.
        </div>
      </StIncCont>
    </StFootCont>
  );
};

export default Footer;

const StFootCont = styled.section`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;

  padding-top: 10vh;
  padding-bottom: 10vh;
  @media screen and (max-width: 768px) {
    padding-top: 2vh;
    padding-bottom: 2vh;
  }
`;

const StImgWrap = styled.div`
  display: flex;
  img {
    width: min(13.5vw, 200px);
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
    height: min(1.1vw, 14px);
    margin-right: 4px;
  }
`;

const StIncCont = styled.div`
`;
