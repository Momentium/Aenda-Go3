import styled from 'styled-components';

const Card = ({mbti, curMBTI, link}) => {

  const checkVisible = () => {
    if(curMBTI === 'random' || curMBTI === `#${mbti}`){
      return true;
    }
    else {
      return false;
    }
  }

  return (
    <StCardCont visible={checkVisible()} onClick={() => window.open(link)}>
      <div className="contents-cont">
        {mbti}
      </div>
      <div className="hover-cont"/>
    </StCardCont>
  )

}
export default Card;

const StCardCont = styled.div`
  position: relative;
  overflow: hidden;

  display: ${props => props.visible ? 'block' : 'none'};
  
  @media screen and (max-width: 425px){
    width: 35vw;
    height: 45vw;
    margin: 3vw 3vw;
  }
  width: 10em;
  height: 15em;
  margin: 20px 3%;
  border: solid 3px skyblue;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;

    &.hover-cont{
      z-index: 10;
      top: 100%;
      background: black;
      opacity: 0;
      transition: all 0.3s ease-out,
    }
  }

  &:hover {
    cursor: pointer;
    & > div.hover-cont{
      top: 0%;
      opacity: 0.8;
    }
  }
`;