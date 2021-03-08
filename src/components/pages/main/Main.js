import styled, { css } from 'styled-components';
import Header from '../Header';
import DrawerList from './tab/DrawerList';

const Main = () => {
  return (
    <StMainCont>
      <Header/>
      <DrawerList/>
    </StMainCont>
  )
}
export default Main;

const StMainCont = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  background-color: white;
  background-image: url('/assets/images/background/bg_web_main.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  z-index: 10;
  
  left: 10px;
  bottom: 10px;

  transition: all 0.7s ease;

  ${({ theme }) => theme.popState ? 
    css`
      overflow: scroll;
      width: ${theme.SW - 20}px;
      height: ${theme.SH - 20}px;
    ` 
    :
    css`
      @media screen and (min-width: 481px) {
        overflow: hidden;
        width: ${theme.calcVW(305)};
        height: ${theme.calcVW(66)};
      }

      @media screen and (max-width: 480px){
        width: 53.41666vw;
        height: 11.45833vw;
        left: 13px;
        bottom: 13px;
      }
    `
  }
`;