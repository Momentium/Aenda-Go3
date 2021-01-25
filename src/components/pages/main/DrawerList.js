import styled, { css } from 'styled-components';
import Drawer from './Drawer';
import Footer from './Footer';
import SlideList from './SlideList';

const DrawerList = () => {
  return (
      <StListCont>
        <div className="line"/>
        <Drawer title="ABOUT 2020 상상만개는"/>
        <div className="line"/>
        <Drawer title="PROGRAM 프로그램 안내"/>
        <div className="line"/>
        <Drawer title="ARTIST 예술가"/>
        <div className="line"/>
        <Drawer title="EXHIBITION 작품 갤러리"/>
        <SlideList/>
        <Drawer title="SEND TO MESSAGE"/>
        <div className="line"/>
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