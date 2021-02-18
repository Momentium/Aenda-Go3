import styled, { css } from 'styled-components';
import Drawer from './Drawer';
import Footer from './Footer';

const DrawerList = () => {
  return (
      <StListCont>
        <StLine/>
        <Drawer title="2020 상상만개는"/>
        <StLine/>
        <Drawer title="프로그램 안내 PROGRAM"/>
        <StLine/>
        <Drawer title="예술가 ARTIST"/>
        <StLine/>
        <Drawer title="작품 갤러리 EXHIBITION"/>
        <StLine/>
        <Drawer title="SEND TO MESSAGE"/>
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
  height: 1px;
  background-color: ${({ theme }) => theme.colors.blue};
`;