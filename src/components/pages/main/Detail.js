import styled, { css } from "styled-components";
import Intro from "./intro/Intro";
import ProgramList from "./program/ProgramList";
import ArtistList from './artist/ArtistList';

const Detail = ({ menu }) => {
  return (
    <StDetailWrap isMsg={menu.includes("MESSAGE")}>

      {menu.includes("2020") && <Intro />}
      {menu.includes("PROGRAM") && <ProgramList />}
      {menu.includes("ARTIST") && <ArtistList />}
    
    </StDetailWrap>
  );
};
export default Detail;

const StDetailWrap = styled.section`
  ${(props) =>
    !props.isMsg &&
    css`
      background: white;
    `}
`;
