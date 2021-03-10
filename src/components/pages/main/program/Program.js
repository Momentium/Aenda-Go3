import styled from "styled-components";

const Program = ({ data, openPage }) => {

  return (
    <StProgramWrap
      className={`${data.mbti} ${data.title}`}
      mbti={data.mbti}
      onClick={openPage}
    >
      <StImgCont>
        <img className={`${data.mbti} orange`} src={data.hovImg} alt={`${data.mbti}-icon`} />
        <img className={`${data.mbti} blue`} src={data.img} alt={`${data.mbti}-icon`} />
      </StImgCont>
      <div className="text program label">{data.title}</div>
    </StProgramWrap>
  );
};
export default Program;

const StProgramWrap = styled.div`
  @media screen and (min-width: 481px) {
    cursor: pointer;
  }
  ${({theme}) => theme.flex('space-between', 'center', 'column')};

  width: ${({theme}) => theme.calcVW(300)};
  /* max-width: 300px; */
  /* height: 17vw; */
  @media screen and (max-width: 480px) {
    width: 100%;
    /* height: 100%; */
  }

  img {
    height: 100%;
    /* @media screen and (max-width: 480px) {
      height: 30vw;
      margin-bottom: 30px;
    } */
  }
  
  .label {
    ${({theme}) => theme.flex('center', 'center')};
    background: ${({ theme }) => theme.colors.blue};

    width: 100%;
    height: 3.6vw;
    @media screen and (max-width: 480px) {
      height: ${({theme}) => theme.calcVW_M(45.72)};
    }
  }
  .text {
    transition: all 0.1s linear;
  }
  transition: all 0.1s linear;

  &:hover {
    transform: translateY(${({theme}) => theme.calcVW(-37)});
    .text {
      background: ${({ theme }) => theme.colors.red};
    }
    .blue {
     opacity: 0;
    }
    .orange {
     opacity: 1;
    }
  }
`;

const StImgCont = styled.div`
  display: flex;
  position: relative;
  
  @media screen and (min-width: 481px) {
    height: ${({theme}) => theme.calcVW(215)};
    margin-bottom: ${({theme}) => theme.calcVW(70)};
  }
  @media screen and (max-width: 480px) {
    height: ${({theme}) => theme.calcVW_M(140)};
    margin-bottom: ${({theme}) => theme.calcVW_M(47)};
  }

  img {
    position: absolute;
    transform: translateX(-50%);
    left:0;
    top: 0;
    height: 100%;
  }
  .blue {
    z-index: 21;
    opacity: 1;
  }
  .orange {
    z-index: 20;
    opacity: 0;
  }
`;