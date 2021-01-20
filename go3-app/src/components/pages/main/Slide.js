import styled from 'styled-components';
import Hashtag from './Hashtag';
import { hashTagData } from '../../../assets/data';

const Slide = ({ selectMBTI, dataIdx, dir }) => {

  const stopSlide = (e) => {
    // const _node1 = e.currentTarget.childNodes[0];
    // const _node2 = e.currentTarget.childNodes[1];
    // const _node3 = e.currentTarget.childNodes[2];

    // _node1.style.webkitAnimationPlayState = 'paused';
    // _node2.style.webkitAnimationPlayState = 'paused';
    // _node3.style.webkitAnimationPlayState = 'paused';

    const _nodes = e.currentTarget.childNodes;
    _nodes.forEach(el => {
      el.style.webkitAnimationPlayState = 'paused'
    });
  };
  const runSlide = (e) => {
    // const _node1 = e.currentTarget.childNodes[0];
    // const _node2 = e.currentTarget.childNodes[1];
    // const _node3 = e.currentTarget.childNodes[2];

    // _node1.style.webkitAnimationPlayState = 'running';
    // _node2.style.webkitAnimationPlayState = 'running';
    // _node3.style.webkitAnimationPlayState = 'running';

    const _nodes = e.currentTarget.childNodes;
    _nodes.forEach(el => {
      el.style.webkitAnimationPlayState = 'running'
    });
  };

  const hashTagList = hashTagData[dataIdx].map((el, idx) => {
    return (
      <Hashtag key={idx} idx={idx} tag={el} selectMBTI={selectMBTI}/>
    )
  });

  return (
    <StSlideWrap onMouseOver={stopSlide} onMouseOut={runSlide} dir={dir === "left"}>
      <StHashTagCont className='tag-cont1'>
        {hashTagList}
      </StHashTagCont>
      <StHashTagCont className='tag-cont2'>
        {hashTagList}
      </StHashTagCont>
      <StHashTagCont className='tag-cont3'>
        {hashTagList}
      </StHashTagCont>
      <StHashTagCont className='tag-cont4'>
        {hashTagList}
      </StHashTagCont>
    </StSlideWrap>
  )
}
export default Slide;

const StSlideWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;

  width: 100%;
  background: #fe573d; 
  
  & > * {
    animation : ${props => props.dir ? "slide-left" : "slide-right"} 20s infinite linear;
  }

  @keyframes slide-left{
    0%   {transform: translateX(0px)}
    100% {transform: translateX(-100%)}  
  }
  @keyframes slide-right{
    0%   {transform: translateX(0px)}
    100% {transform: translateX(100%)}  
  }
`;

const StHashTagCont = styled.span`
  /* display: flex; */
  white-space: nowrap
`;
