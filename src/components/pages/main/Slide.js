import styled from 'styled-components';
import Hashtag from './Hashtag';
import { hashTagData } from '../../../data/data';

const Slide = ({ selectMBTI, dataIdx, dir }) => {
  const hashTagList = hashTagData[dataIdx].map((el, idx) => {
    return (
      <Hashtag key={idx} idx={idx} tag={el} selectMBTI={selectMBTI}/>
    )
  });

  return (
    <StSlideWrap dir={dir}>
      <span>
        {hashTagList}
      </span>
      <span>
        {hashTagList}
      </span>
      <span>
        {hashTagList}
      </span>
      <span>
        {hashTagList}
      </span>
      <span>
        {hashTagList}
      </span>
      <span>
        {hashTagList}
      </span>
      <span>
        {hashTagList}
      </span>
      <span>
        {hashTagList}
      </span>
      <span>
        {hashTagList}
      </span>
    </StSlideWrap>
  )
}
export default Slide;

const StSlideWrap = styled.div`
  display: flex;
  justify-content: ${ props => props.dir === "left" ? "flex-start" : "flex-end" };

  background: ${({ theme }) => theme.colors.blue}; 

  & {
    animation: ${ props => props.dir === "left" ? "slide-left1" : "slide-right1" } 120s infinite linear;
    &:hover{
    animation-play-state: paused;
    }

    @keyframes slide-left1{
      0%   { transform: translateX(0%) }
      100% { transform: translateX(-400%) }
    }
    @keyframes slide-right1{
      0%   { transform: translateX(0%) }
      100% { transform: translateX(400%) }  
    }
  }

  & > span {
    white-space: nowrap;
    animation: ${ props => props.dir === "left" ? "slide-left" : "slide-right" } 60s infinite linear;
    
    @keyframes slide-left{
      0%   { transform: translateX(0%) }
      100% { transform: translateX(-100%) }
    }
    @keyframes slide-right{
      0%   { transform: translateX(0%) }
      100% { transform: translateX(100%) }  
    }
  }
  
`;
