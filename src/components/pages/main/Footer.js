import React, { useContext } from 'react';
import styled from 'styled-components';
import { VeiwContxt } from '../../common/ContextStorage';
import * as St from '../../styles/styledComp';
import footerlogo from '../../../assets/logo/footerlogo.svg';

const Footer = () => {
  const { WW } = useContext(VeiwContxt)

  return (
    <StFootCont>
      <StLeftCont>
        <StImgWrap>
          <img src={footerlogo} alt="footer-logo"/>
        </StImgWrap>

        <StInfoCont>
          <div className="text">주최. 문화체육관광부</div>
          <div className="text">주관. 한국문화예술교육진흥원</div>
          <div className="text" style={{ visibility: 'hidden' }}>hidden</div>
          <div className="text">(주)앤다 서울시 중구 정동길 12-11 카리스타워 2층</div>
          <div className="text">사업자등록번호 211-88-69418</div>
          <div className="text">개인정보보호책임자 이상진</div>
          <div className="text" style={{ visibility: 'hidden' }}>hidden</div>
          { WW < 830 && <div className="text">ⓒ 2020 AENDA Inc., All rights reserved.</div> }
        </StInfoCont>

        <StLinkCont>
          <div className="text">go310000@naver.com</div>
          <div className="text">02) 549-2234</div>
          <div className="text" style={{ visibility: 'hidden' }}>hidden</div>
          <div className="text">Instagram</div>
          <div className="text">Facebook</div>
        </StLinkCont>
      </StLeftCont>


      { WW >= 830 && <div className="text">ⓒ 2020 AENDA Inc., All rights reserved.</div> }

    </StFootCont>
  )
}

export default Footer;

const StFootCont = styled(St.Section)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  /* @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  } */

  width: 100%;

  padding-top: 10vh;
  padding-bottom: 10vh;
  @media screen and (max-width: 768px) {
    padding-top: 2vh;
  padding-bottom: 2vh;
  }
  
  box-sizing: border-box;

  .text {
    font-size: 0.563em;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    text-align: left;
    color: #555555;
  }

`;

const StLeftCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StImgWrap = styled.div`
  display: flex;

  img {
    width: 8.094em;
  }
`;

const StInfoCont = styled.div`
  margin: 0 4vw;
`;

const StLinkCont = styled.div`
`;