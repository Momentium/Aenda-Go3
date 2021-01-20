import styled from 'styled-components';
import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer';
import SlideList from './SlideList';

const Main = () => {
  return (
    <StMainCont>
      <Header/>
      <Drawer title="ABOUT 2020 상상만개는"/>
      <Drawer title="PROGRAM 프로그램 안내"/>
      <Drawer title="ARTIST 예술가"/>
      <Drawer title="EXHIBITION 작품 갤러리"/>
      <SlideList/>
      <Drawer title="SEND TO MESSAGE"/>
      <Footer/>
    </StMainCont>
  )
}
export default Main;

const StMainCont = styled.div`
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  /* -ms-overflow-style: none; 
  &::-webkit-scrollbar { 
    display: none; 
  } */

`;