import styled, { css } from 'styled-components';
import Header from '../../common/Header';
import DrawerList from './DrawerList';

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
  background-color: ${(props) => props.theme.colors.white};
  /* background-image: url('/assets/images/bg_img.png'); */

  position: absolute;
  z-index: 10;
  left: 5px;
  top: 5px;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  transition: all 1s ease;

  ${({ theme }) => theme.popState ? 
    css`
      width: ${`${theme.SW - 10}px`};
      height: ${`${theme.SH - 10}px`};
      overflow: scroll;
    ` 
    :
    css`
      width: 16vw;
      height: 8vh;
      overflow: hidden;

      top: ${`${theme.SH - 10 - 0.08 * theme.SH}px`};

      @media screen and (max-width: 768px) {
        width: 40vw;
      }
    `
  }
`;