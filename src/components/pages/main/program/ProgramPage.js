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
      <div className="text program subtitle">{data.intro}</div>

      <div className="text program kit-title">예술가의 키트</div>
      <div className="text program kit">{data.kit}</div>

      <img className="mbti-icon" src={`assets/icons/mbti/${mbti} orange.svg`} alt="mbti-icon"/>

      <div className="text program kit-intro-title">키트 소개</div>
      <div className="text program kit-intro">{data.kit_intro}</div>
      <ReactPlayer
        url={"https://www.youtube.com/embed/hvh7VYctIqo"}
        playing={false}
        controls={true}
        width={theme.SW / 1.5}
        height={(theme.SW * 9) / (16 * 1.5)}
      />
    </StPageWrap>
  )
}

export default ProgramPage;

const StPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 54px; 
  padding-bottom: 120px;
  box-sizing: border-box;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  background: ${ ({ theme }) => `${theme.colors.blue}` };


  .title {
    margin-bottom: 56px;
  }

  .subtitle {
    margin-bottom: 72px;
  }

  .kit-title {
    margin-bottom: 48px;
  }

  .kit {
    margin-bottom: 48px;
  }

  .mbti-icon {
    width: 144px;
    margin-bottom: 40px;
  }

  .kit-intro-title {
    margin-bottom: 16px;
  }

  .kit-intro {
    margin-bottom: 176px;
  }
`;

const StTopCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 72px;

  img {
    &.hide {
      width: 16px; 
      visibility: hidden;
    }
    &.logo {
      /* width: ${ ({ theme }) => `${theme.SW * 0.2}`};  */
      height: 32px;
    }
    &.close {
      width: 16px; 
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
