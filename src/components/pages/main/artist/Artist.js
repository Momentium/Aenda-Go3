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
      <div className="text artist aka">
        {
          _idx === 2 ?
          data.aka.split(' ')[1]
          :
          data.aka
        }
      </div>
    </StArtistWrap>
  );
};
export default Artist;

const StArtistWrap = styled.div`
  ${({theme}) => theme.flex('space-between', 'center', 'column')};

  @media screen and (min-width: 481px) {
    cursor: pointer;
    width: ${({theme}) => theme.calcVW(320)};
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }

  .img-div {
    transition: all 0.1s linear;

    border: solid 5px white;
    border-radius: 50%;

    ${(props) => props.theme.backImg(props.imgUrl, 'top')}
    @media screen and (min-width: 481px) {
      width: ${({theme}) => theme.calcVW(320)};
      height: ${({theme}) => theme.calcVW(320)};
      margin-bottom: ${({theme}) => theme.calcVW(30)};
    }
    @media screen and (max-width: 480px) {
      width: ${({theme}) => theme.calcVW_M(190.67)};
      height: ${({theme}) => theme.calcVW_M(190.67)};
      margin-bottom: ${({theme}) => theme.calcVW_M(15)};
    }
  }

  .name {
    @media screen and (min-width: 481px) {
      margin-bottom: ${({theme}) => theme.calcVW(4)};
    }
    @media screen and (max-width: 480px) {
      margin-bottom: ${({theme}) => theme.calcVW_M(7)};
    }
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
