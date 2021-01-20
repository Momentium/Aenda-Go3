import styled from 'styled-components';
import Slide from './Slide';

const SlideList = () => {
  return (
    <StSlideCont>
      <Slide dir="left"/>
      <Slide dir="right"/>
      <Slide dir="left"/>
      <Slide dir="right"/>
    </StSlideCont>
  );
}
export default SlideList;

const StSlideCont = styled.div`
  background: #fe573d; 
  width: 100%;
`;