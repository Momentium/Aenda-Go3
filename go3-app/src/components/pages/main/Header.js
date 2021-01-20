import { useEffect } from 'react';
import styled from 'styled-components';
import * as St from '../../styles/styledComp';
import headerlogo from '../../../assets/logo/headerlogo.svg';
import youtube from '../../../assets/icons/youtube.svg';

const Header = () => {

  return (
    <StHeaderCont>

      <StTopCont>
        <img src={headerlogo} alt="header-logo"/>
        <img src={youtube} alt="youtube-icon"/>
      </StTopCont>

      <div>
        <StMidCont>
          <div>반짝반짝 열아홉</div>
          <div>나의 취향이 닿는 세계로</div>
        </StMidCont>

        <StBotCont>
          <div>불안하고 흔들리는 청소년기의</div>
          <div>마지막 단계를 마무리하고</div>
          <div>반짝반짝 빛나는 새로운 시기를 맞이하기 위한 마중물</div>
        </StBotCont>
      </div>

    </StHeaderCont>
  )
}

export default Header;

const StHeaderCont = styled(St.Section)`
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  & > div {
    width: 100%;
  }
`;

const StTopCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  img:first-child{
    /* width: 40vw; */
    width: 24.688em;
  }
  img:last-child{
    /* width: 4vw; */
    width: 2.469em;
    
    &:hover {
      cursor: pointer;
    }
  }
`;

const StMidCont = styled.div`
  margin-bottom: 3.5vh;
  * {
    /* font-size: 6vw; */
    font-size: 3.750em;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #fe573d;
  }
`;

const StBotCont = styled.div`
  * {
    /* font-size: 2.5vw; */
    font-size: 1.563em;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #fe573d;
  }
`;