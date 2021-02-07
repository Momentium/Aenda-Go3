import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Program = ({ mbti, title, openPage }) => {
  const [img, setImg] = useState(`assets/icons/mbti/${mbti}.svg`);
  const mouseOnImg = () => {
    setImg(`assets/icons/mbti/${mbti}_orange.svg`);
  };
  const mouseOutImg = () => {
    setImg(`assets/icons/mbti/${mbti}.svg`);
  };

  return (
    <StProgramWrap
      className={`${mbti} ${title}`}
      mbti={mbti}
      onClick={openPage}
      onMouseOver={mouseOnImg}
      onMouseOut={mouseOutImg}
    >
      <img className={`${mbti}`} src={img} alt={`${mbti}-icon`} />
      <div className="text program label">{title}</div>
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
  height: 17vw;

  img {
    height: 11.25vw;
  }
  .label {
    width: 100%;
    height: 3.6vw;
    background: ${({ theme }) => theme.colors.blue};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  transition: all 0.1s linear;

  &:hover {
    .text {
      background: ${({ theme }) => theme.colors.red};
    }
    transform: translateY(-1.8vw);
  }
`;
