import styled from "styled-components";

const Artist = ({ _idx, data, openPage }) => {

  return (
    <StArtistWrap
      className={`${_idx} ${data.name}`}
      onClick={openPage}
      imgUrl={data.img}
    >
      <div className={`${data.name} img-div`}></div>
      <div className="text artist name">{data.name.replace(/ /gi, '')}</div>
      <div className="text artist aka">{data.aka}</div>
    </StArtistWrap>
  );
};
export default Artist;

const StArtistWrap = styled.div`
  @media screen and (min-width: 481px) {
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* max-width: 300px; */
  /* width: 15.6vw; */
  width: ${({theme}) => theme.calcVW(320)};
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  .img-div {
    transition: all 0.1s linear;
    width: ${({theme}) => theme.calcVW(320)};
    height: ${({theme}) => theme.calcVW(320)};
    border: solid 5px white;
    border-radius: 50%;

    @media screen and (max-width: 480px) {
      width: 100%;
      height: 40vw;
    }

    background-image: url(${props => props.imgUrl});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: ${({theme}) => theme.calcVW(30)};
  }
  .name {
    margin-bottom: ${({theme}) => theme.calcVW(4)};
  }
  
  transition: all 0.1s linear;

  &:hover {
    transform: translateY(${({theme}) => theme.calcVW(-37)});
    .img-div {
      border-color: ${({ theme }) => theme.colors.red};
    }
    .text {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
