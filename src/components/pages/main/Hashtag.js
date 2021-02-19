import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { TagContxt } from "../../common/ContextStorage";

const Hashtag = ({ dataIdx, setPauseIdx, isPaused, idx, tag }) => {
  const { curTag, handleCurTag } = useContext(TagContxt);
  const handleClick = (e) => {
    setPauseIdx(dataIdx);
    handleCurTag(e);
  };

  return (
    <StHashCont
      className={`text hash-tag ${idx}`}
      isFocus={isPaused && curTag === tag}
      onClick={handleClick}
    >
      {`#${tag}`}
    </StHashCont>
  );
};
export default Hashtag;

const StHashCont = styled.span`
  vertical-align: baseline;
  padding: 2px 12px 4px 12px;
  color: white;

  ${ props => 
  props.isFocus ? 
  css`
    @media screen and (min-width: 481px) {
      cursor: pointer;
    }
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.blue};
  `
  :
  css`
    &:hover {
      @media screen and (min-width: 481px) {
        cursor: pointer;
      }
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.blue};
    }
  `
  }
`;
