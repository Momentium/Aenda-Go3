import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Program = ({ mbti, title, openPage }) => {
  return (
    <StProgramWrap className={`${mbti} ${title}`} onClick={openPage}>
      <img className={`${mbti}`} src={`assets/icons/mbti/${mbti}.svg`} alt={`${mbti}-icon`}/>
      <div className="text program mbti">{title}</div>
    </StProgramWrap>
  );
}
export default Program;

const StProgramWrap = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 15%;

  .text {
    background: ${({theme}) => theme.colors.blue};
    padding: 5.5px 30.5px 6px;
  }

  &:hover {
    cursor: pointer;
    .text {
      background: ${({theme}) => theme.colors.red};
    }
  }
  img {
    width: 100%;
  }

  
`;


