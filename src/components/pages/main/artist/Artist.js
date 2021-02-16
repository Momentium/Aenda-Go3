import styled from "styled-components";

const Artist = ({ _idx, data, openPage }) => {

  return (
    <StArtistWrap
      className={`${_idx} ${data.name}`}
      onClick={openPage}
      imgUrl={data.img}
    >
      <div className={`${data.name} img-div`}></div>
      <div className="text artist name">{data.name}</div>
      <div className="text artist aka">{data.aka}</div>
    </StArtistWrap>
  );
};
export default Artist;

const StArtistWrap = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 300px;
  width: 15.6vw;
  /* height: 17vw; */

  .img-div {
    transition: all 0.1s linear;
    width: 18vw;
    height: 18vw;
    background-image: url(${props => props.imgUrl});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin-bottom: 14.8px;

    box-sizing: border-box;
    border: solid 5px white;
  }
  
  transition: all 0.1s linear;

  &:hover {
    .img-div {
      border: solid 5px ${({ theme }) => theme.colors.red};
    }
    .text {
      color: ${({ theme }) => theme.colors.red};
    }
    transform: translateY(-1.8vw);
  }
`;
