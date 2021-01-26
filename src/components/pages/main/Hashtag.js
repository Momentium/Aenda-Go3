import styled from 'styled-components';

const Hashtag = ({ dataIdx, idx, tag, selectMBTI }) => {
  return (
    <StHashCont className={`text hash-tag ${idx}`} onClick={selectMBTI}>
      {`#${tag}`}
    </StHashCont>
  )
}
export default Hashtag;

const StHashCont = styled.div`
  display: inline;

  padding: 2px 12px;
  color: white;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.blue};
  }
  
`;