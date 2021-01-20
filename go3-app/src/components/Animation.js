import styled from 'styled-components';
import Hashtag from './Hashtag';
import { mbtiData } from '../assets/data';

const Animation = ({ selectMBTI }) => {

  const stopSlide = (e) => {
    const firstNode = e.currentTarget.childNodes[0];
    const lastNode = e.currentTarget.childNodes[1];
    firstNode.style.webkitAnimationPlayState = 'paused';
    lastNode.style.webkitAnimationPlayState = 'paused';
  };
  const runSlide = (e) => {
    const firstNode = e.currentTarget.childNodes[0];
    const lastNode = e.currentTarget.childNodes[1];
    firstNode.style.webkitAnimationPlayState = 'running';
    lastNode.style.webkitAnimationPlayState = 'running';
  };

  const hashTagList = mbtiData.map((el, idx) => {
    return (
      <Hashtag key={idx} idx={idx} mbti={el} selectMBTI={selectMBTI}/>
    )
  });

  return (
    <StAniCont onMouseOver={stopSlide} onMouseOut={runSlide}>
      <div className='tag-cont1'>
        {hashTagList}
      </div>
      <div className='tag-cont2'>
        {hashTagList}
      </div>
    </StAniCont>
  )
}
export default Animation;

const StAniCont = styled.div`
  display: flex;
  flex-wrap: nowrap;

  width: 100%;
  margin: 0 0 10px 0;
  
  box-sizing: border-box;
  border: solid 3px green;

  overflow: hidden;

  & > * {
    animation: slide-left 20s infinite linear;
  }

  @keyframes slide-left{
    0%   {transform: translateX(0px)}
    100% {transform: translateX(-100%)}
  }

`;
