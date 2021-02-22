import styled, { css } from 'styled-components';
import Drawer from './Drawer';
import Footer from '../Footer';
import { drawerData } from '../../../../data/data';

const DrawerList = () => {
  return (
      <StListCont>
        <StLine/>
        <Drawer title={drawerData.intro}/>
        <StLine/>
        <Drawer title={drawerData.program}/>
        <StLine/>
        <Drawer title={drawerData.artist}/>
        <StLine/>
        <Drawer title={drawerData.exhib}/>
        <StLine/>
        <Drawer title={drawerData.msg}/>
        <StLine/>
        <Footer/>
      </StListCont>
  )
}
export default DrawerList;

const StListCont = styled.div`
  transition: all 1s ease;
  ${props => props.theme.popState ? 
    css`
      opacity: 1;
    `
    :
    css`
      opacity: 0;
      transform: translateY(200%);
    ` 
  }
`;

const StLine = styled.div`
  width: 100%;
  height: 2px;
  /* @media screen and (max-width: 480px) {
    height: 2px;
  } */
  background-color: ${({ theme }) => theme.colors.blue};
`;