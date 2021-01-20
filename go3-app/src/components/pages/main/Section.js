import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {cardData, } from '../../../assets/data';
import Card from '../../Card';
import SlideList from './SlideList';

const Section = () => {

  useEffect(() => {
    console.log('Section mounted');
  }, []);

  const [curMBTI, setCurMBTI] = useState('random');
  useEffect(() => {
  }, [curMBTI])
  const selectMBTI = (e) => {
    const selected = e.currentTarget.innerText;
    setCurMBTI(selected);
  }

  const cardList = cardData.map(
    (el, idx) => {
      return (
        <Card key={idx} 
          mbti={el.mbti} 
          link={el.link} 
          curMBTI={curMBTI}
        />
      )
    }
  )

  return (
    <StSectionCont>
      <SlideList selectMBTI={selectMBTI}/>
      {/* {cardList} */}
    </StSectionCont>
  );
}
export default Section;


const StSectionCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 0 20px 0;
`;
