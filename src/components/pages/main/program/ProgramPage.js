import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import styled, { ThemeContext } from 'styled-components';
import { mbtiData } from '../../../../data/data';

const ProgramPage = ({ mbti, title, closePage }) => {
  const data = mbtiData[`${mbti}`];
  const theme = useContext(ThemeContext);

  return (
    <StPageWrap >
      <StTopCont>
        <img className="hide" src="assets/icons/close.svg" alt="hidden-icon"/>
        <img className="logo" src="assets/logo/red-logo.svg" alt="red-logo"/>
        <img className="close" src="assets/icons/close.svg" alt="close-icon" onClick={closePage}/>
      </StTopCont>
      
      <div className="text program title">{title}</div>
      <div className='line' style={{marginTop: '23px', marginBottom: '40px'}}/>
      <StImgCont>

      </StImgCont>
      {/* <ReactPlayer
        url={"https://www.youtube.com/embed/Kjb_AbqY41M"}
        playing={false}
        controls={true}
        width={theme.SW / 1.5}
        height={(theme.SW * 9) / (16 * 1.5)}
      /> */}
      <div className="text program subtitle">{data.intro}</div>

      <div className="text program kit-title">예술가의 키트</div>
      <div className='line' style={{marginTop: '14px', marginBottom: '33.3px'}}/>
      <div className="text program kit">{data.kit}</div>

      <img className="mbti-icon" src={`assets/icons/mbti/${mbti}_orange.svg`} alt="mbti-icon"/>

      <div className="text program kit-intro-title">예술가의 코멘트</div>
      <div className="text program kit-intro">{data.kit_intro}</div>
      
    </StPageWrap>
  )
}

export default ProgramPage;

const StPageWrap = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 120px;
  box-sizing: border-box;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  background: ${ ({ theme }) => `${theme.colors.blue}` };

  .line {
    width: 100%;
    height: 1px;
    background: ${ ({theme}) => `${theme.colors.red}`};
  }


  .text {
    font-family: "TTSoopilmyungjoR";
  }
  .title {
    font-family: 'Noto Sans KR', sans-serif;
  }

  .subtitle {
    margin: 67px 0;
  }

  .kit-title {
  }

  .kit {
    margin-bottom: 48px;
  }

  .mbti-icon {
    width: 60px;
    margin-bottom: 40px;
  }
/* 
  .kit-intro-title {
    margin-bottom: 16px;
  } */
`;

const StTopCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 72px;
  box-sizing: border-box;
  padding: 0 54px;

  img {
    &.hide {
      width: 16px; 
      visibility: hidden;
    }
    &.logo {
      height: 32px;
    }
    &.close {
      @media screen and (min-width: 481px) {
        cursor: pointer;
      }
      width: 16px; 
    }
  }
`;

const StImgCont = styled.div`
  position: relative;
  width: 100%;
`;