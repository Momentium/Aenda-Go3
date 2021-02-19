import styled from "styled-components";

const GalleryCard = ({ data }) => {

  const openInsta = () => {
    window.open(data.instaLink, "_blank");
  }

  return (
    <StCardWrap backImg={data.imgUrl}>
      <StHoverWrap onClick={openInsta}>
        <div className="text gallery id">{`@${data.instaID}`}</div>
      </StHoverWrap>
    </StCardWrap>
  );
};

export default GalleryCard;

const StCardWrap = styled.div`
  width: 16.5vw;
  height: 16.5vw;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 0;
    padding-bottom:100%
  }
  background-image: url(${(props) => props.backImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
`;

const StHoverWrap = styled.div`
  @media screen and (min-width: 481px) {
    cursor: pointer;
  }

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(45, 31, 209, 0);

  .text {
    opacity: 0;
  }

  &:hover {
    transition: all 0.1s linear;
    background: rgba(45, 31, 209, 0.8);
    .text {
      transition: all 0.1s linear; 
      opacity: 1;  
    }
  }
`;
