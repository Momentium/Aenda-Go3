import styled from 'styled-components';

const Footer = () => {

  return (
    <StFootCont>
      <StImgWrap>
        <img src="assets/logo/footer-logo.svg" alt="footer-logo"/>
      </StImgWrap>


      <StTextCont>
        <StInfoCont>
          <div className="text footer">
            주최. 문화체육관광부<br/>
            주관. 한국문화예술교육진흥원<br/>
            <br/>
            (주)앤다 서울시 중구 정동길 12-11 카리스타워 2층<br/>
            사업자등록번호 211-88-69418<br/>
            개인정보보호책임자 이상진<br/>
            <br/>
          </div>
        </StInfoCont>

        <StLinkCont>
          <div className="text footer">
            go310000@naver.com<br/>
            02) 549-2234<br/>
            <br/>
          </div>
          <table>
            <tbody>
              <tr >
                <td><div style={{display: 'flex'}}><img src="assets/icons/instagram.svg" alt="instagram-logo"/></div></td>
                <td><div className="text footer">Instagram</div></td>
              </tr>
              <tr >
                <td><div style={{display: 'flex'}}><img src="assets/icons/facebook.svg" alt="instagram-logo"/></div></td>
                <td><div className="text footer">Facebook</div></td>
              </tr>
            </tbody>
          </table>
          <br/>
        </StLinkCont>

        <StIncCont>
          <div className="text footer">ⓒ 2020 AENDA Inc., All rights reserved.</div>
        </StIncCont>
      </StTextCont>
    </StFootCont>
  )
}

export default Footer;

const StFootCont = styled.section`
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
  flex: 1;
  img {
    width: 130px;
  }
`;

const StTextCont = styled.div`
  display: flex;
  flex: wrap;
  flex: 3;
  justify-content: space-around;
`;

const StInfoCont = styled.div`
  flex: 1;
`;

const StLinkCont = styled.div`
  flex: 2;
  img {
    height: 12px;
  }
`;

const StIncCont = styled.div`
`;