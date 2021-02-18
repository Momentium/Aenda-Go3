import styled, { css } from "styled-components";
import Intro from "./intro/Intro";
import ProgramList from "./program/ProgramList";
import ArtistList from './artist/ArtistList';
import GalleryList from './gallery/GalleryList';
import Message from './msg/Message';


const Detail = ({ menu, curTag }) => {
  return (
    <StDetailWrap 
      isMsg={menu.includes("MESSAGE")}
      isExhi={menu.includes("EXHIBITION")}
    >

      {menu.includes("2020") && <Intro />}
      {menu.includes("PROGRAM") && <ProgramList />}
      {menu.includes("ARTIST") && <ArtistList />}
      {menu.includes("EXHIBITION") && <GalleryList curTag={curTag}/>}
      {menu.includes("MESSAGE") && <Message />}
    
    </StDetailWrap>
  );
};
export default Detail;

const StDetailWrap = styled.section`
  ${props => props.isExhi && css`padding: 0`};

  ${(props) =>
    !props.isMsg &&
    css`
      background: white;
    `}
`;
