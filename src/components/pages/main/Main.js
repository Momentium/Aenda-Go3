import styled, { css } from 'styled-components';
import Header from '../Header';
import DrawerList from './tab/DrawerList';

const Main = ({popState}) => {
  return (
    <StMainCont>
      <Header/>
      {popState && <DrawerList/>}
    </StMainCont>
  )
}
export default Main;

const StMainCont = styled.div`
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  background-color: white;
  background-image: url('/assets/images/background/bg_web_main.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  box-sizing: content-box;
  position: absolute;
  z-index: 10;
  
  @media screen and (min-width: 481px){
    left: 10px;
    bottom: 10px;
  }
  @media screen and (max-width: 480px){
    left: 5px;
    bottom: 5px;
  }

  transition: all 0.7s ease;

  ${({ theme }) => theme.popState ? 
    css`
      overflow: scroll;
      @media screen and (min-width: 481px){
        width: ${theme.SW - 20}px;
        height: ${theme.SH - 20}px;
      }
      @media screen and (max-width: 480px){
        width: ${theme.SW - 10}px;
        height: ${theme.SH - 10}px;
      }   
    ` 
    :
    css`
      overflow: hidden;
      @media screen and (min-width: 481px) {
        width: ${theme.calcVW(305)};
        height: ${theme.calcVW(66)};
      }

      @media screen and (max-width: 480px){
        width: ${theme.calcVW_M(256.32)};
        height: ${theme.calcVW_M(55)};
        left: 25px;
        bottom: 25px;
      }
    `
  }
`;