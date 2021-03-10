import styled from "styled-components";
import { galleryData } from "../../../../data/data";
import GalleryCard from "./GalleryCard";

const GalleryList = ({ curTag }) => {
  const _len = galleryData[curTag].length;
  const _cards =
    window.innerWidth > 480
      ? galleryData[curTag]
      : galleryData[curTag].slice(0, _len - (_len % 2));
  return (
    <StGalleryCont cards={_cards.length}>
      {_cards.map((el, idx) => (
        <GalleryCard key={idx} data={el} />
      ))}
    </StGalleryCont>
  );
};

export default GalleryList;

const StGalleryCont = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: ${(props) => `repeat(${props.cards / 5}, 1fr)`};
  row-gap: 2.656525vw;
  column-gap: 2.656525vw;
  padding: 2.656525vw;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: ${(props) => `repeat(${props.cards / 2}, 1fr)`};
    row-gap: 5vw;
    column-gap: 5vw;
    padding: 5vw;
  }

`;
