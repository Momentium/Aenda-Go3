import styled from 'styled-components';

const Hashtag = ({ dataIdx, idx, tag, selectMBTI }) => {
  return (
    <StHashCont id={`${dataIdx}-${idx}`} className={`text hash-tag ${idx}`} onClick={selectMBTI}>
      {`#${tag}`}
    </StHashCont>
  )
}
export default Hashtag;

const StHashCont = styled.div`
  display: inline;

  @media screen and (max-width: 425px){
    margin: 0 0.7em;
  }

  padding: 0 0.5em;
  color: white;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.blue};
  }
  
`;