import styled from 'styled-components';
import { galleryData } from '../../../../data/data';
import GalleryCard from './GalleryCard';

const GalleryList = ({ curTag }) => {
  const _cards = galleryData[curTag]
  return (
    <StGalleryCont cards={_cards.length}>
      {
        _cards.map((el, idx) => 
          <GalleryCard key={idx} data={el}/>  
        )
      }
    </StGalleryCont>
  );
};

export default GalleryList;

const StGalleryCont = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: ${ props => `repeat(${props.cards / 5}, 1fr)` };
  
  row-gap: 2.656525vw;
  column-gap: 2.656525vw;
  justify-items: center;

  padding: 2.656525vw;
`;
