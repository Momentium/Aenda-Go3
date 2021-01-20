import styled from 'styled-components';

const Hashtag = ({ idx, tag, selectMBTI }) => {
  return (
    <StHashCont className={`hash-tag ${idx}`} onClick={selectMBTI}>
      {`#${tag}`}
    </StHashCont>
  )
}
export default Hashtag;

const StHashCont = styled.span`

  @media screen and (max-width: 425px){
    margin: 0 0.7em;
    font-size: 6vw;
  }

  margin: 0 1em;
  color: #f2f0ec;
  font-size: 150%;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background: #f2f0ec;
    color: #fe573d;
  }
`;