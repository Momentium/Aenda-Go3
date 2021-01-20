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
  }

  margin: 0 0.5em;
  color: #f2f0ec;
  font-size: 150%;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background: #f2f0ec;
    color: #fe573d;
  }

  font-size: 1.250em;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.66px;
  text-align: left;
  color: #ffffff;
`;