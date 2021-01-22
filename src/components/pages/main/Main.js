import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContxt } from '../../common/ContextStorage';
import Header from '../../common/Header';
import Drawer from './Drawer';
import Footer from './Footer';
import SlideList from './SlideList';

const Main = () => {
  const { popState } = useContext(MainContxt);

  return (
    <StMainWrap className="main-wrap">
      <Header/>
      {
        popState && 
        <>
          <Drawer title="ABOUT 2020 상상만개는"/>
          <Drawer title="PROGRAM 프로그램 안내"/>
          <Drawer title="ARTIST 예술가"/>
          <Drawer title="EXHIBITION 작품 갤러리"/>
          <SlideList/>
          <Drawer title="SEND TO MESSAGE"/>
          <Footer/>
        </>
      }
    </StMainWrap>
  )
}
export default Main;

const StMainWrap = styled.div`
  width: 100%;
  height: 100%;

  box-sizing: border-box;
`;