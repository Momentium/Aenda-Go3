import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Program = ({ mbti, title, openPage }) => {
  return (
    <StProgramWrap className={`${mbti} ${title}`} mbti={mbti} onClick={openPage}>
      <img
        className={`${mbti}`}
        // _url={`assets/icons/mbti/${mbti}.svg`}
        alt={`${mbti}-icon`}
      />
      <div className="text program mbti">{title}</div>
    </StProgramWrap>
  );
};
export default Program;

const StProgramWrap = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 300px;
  width: 15.6vw;

  img {
    width: 100%;
    content: url(${props => `assets/icons/mbti/${props.mbti}.svg`});
  }
  .text {
    width: 100%;
    height: 3.6vw;
    background: ${({ theme }) => theme.colors.blue};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  transition: all 0.1s linear;

  &:hover {
    img {
      content: url(${props => `assets/icons/mbti/${props.mbti}_orange.svg`});
    }
    .text {
      background: ${({ theme }) => theme.colors.red};
    }
    transform: translateY(-1.8vw);
  }
`;
