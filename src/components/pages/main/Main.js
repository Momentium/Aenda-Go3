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
  background-color: white;
  background-image: url('/assets/images/background/bg_web_main.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  z-index: 10;
  
  left: 5px;
  bottom: 5px;
  
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  transition: all 0.7s ease;

  ${({ theme }) => theme.popState ? 
    css`
      width: ${`${theme.SW - 10}px`};
      height: ${`${theme.SH - 10}px`};
      overflow: scroll;
    ` 
    :
    css`
      width: 16vw;
      height: 3.43vw;
      @media screen and (max-width: 480px){
        width: 53.41666vw;
        height: 11.45833vw;
        left: 13px;
        bottom: 13px;
      }
      overflow: hidden;
    `
  }
`;