import styled from 'styled-components';
import Slide from './Slide';

const SlideList = () => {
  return (
    <StSlideCont>
      <Slide dataIdx={0} dir="left"/>
      <Slide dataIdx={1} dir="right"/>
      <Slide dataIdx={2} dir="left"/>
      <Slide dataIdx={3} dir="right"/>
    </StSlideCont>
  );
}
export default SlideList;

const StSlideCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 14.563em;
  padding: 1.922em 0;
  box-sizing: border-box;

  background: #fe573d; 
`;