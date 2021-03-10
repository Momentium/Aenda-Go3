import styled from 'styled-components';
import { Slide } from '@material-ui/core';

const SlidePage = ({ popSlide, slidePage }) => {
  return (
    <Slide in={popSlide} direction='right'>
      <StSlideCont>
        {slidePage}
      </StSlideCont>
    </Slide>
  );
};
export default SlidePage;

const StSlideCont = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: ${ ({ theme }) => theme.SW }px;
  height:${ ({ theme }) => theme.SH }px;

  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`