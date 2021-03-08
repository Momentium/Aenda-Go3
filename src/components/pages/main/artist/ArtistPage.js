import React, { useContext } from "react";
import ReactPlayer from "react-player";
import styled, { ThemeContext } from "styled-components";
import { artistData } from "../../../../data/data";

const ArtistPage = ({ _idx, closePage }) => {
  const data = artistData[Number(_idx)];
  const theme = useContext(ThemeContext);

  return (
    <StPageWrap>
      <StTopCont>
        <img
          className="close"
          src="assets/icons/close.svg"
          alt="close-icon"
          onClick={closePage}
        />
      </StTopCont>

      <StTitleCont>
        <img src="assets/icons/left-wing.svg" alt="left-wing" />
        <div className="text artist title">        
          {_idx !== '12' && `${data.aka}.`}
          {` ${data.name}`}
        </div>
        <img src="assets/icons/right-wing.svg" alt="right-wing" />
      </StTitleCont>

      <StPlayerWrap>
        <ReactPlayer
          url={theme.popSlide && `${data.vid}`}
          playing={theme.popSlide}
          controls={true}
          width={'100%'}
          height={'100%'}
          playsinline={true}
          config={{
            vimeo: {
              playerOptions: {
                quality: '1080p'
              }
            }
          }}
        />
      </StPlayerWrap>

      <StBotCont>
        <div className="text artist ment">{data.ment}</div>
        {
          window.innerWidth > 480 ?
          <div className="text artist why">{data.why}</div>
          :
          <div className="text artist why">{data.why_m}</div>
        }

        <StImgCont imgUrl={data.img}>
          <div className="img-div"></div>
          <div className="hist-cont">
            {data.hist.map((el, idx) => (
              <div key={idx} className="text artist hist">
                {el}
              </div>
            ))}
          </div>
        </StImgCont>
      </StBotCont>
    </StPageWrap>
  );
};

export default ArtistPage;

const StPageWrap = styled.div`
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 120px;
  @media screen and (max-width: 480px) {
    padding-top: 30px;
    padding-bottom: 90px;
  }
  box-sizing: border-box;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  background: ${({ theme }) => `${theme.colors.blue}`};

  .line {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => `${theme.colors.red}`};
  }

`;

const StTopCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 45px;
  box-sizing: border-box;
  padding: 0 30px;

  .close {
    @media screen and (min-width: 481px) {
      width: 16px;
      cursor: pointer;
    }
    @media screen and (max-width: 480px) {
      width: 6.25vw;
    }
  }
`;

const StTitleCont = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    align-items: flex-start;
    div.title {
      /* width: 65%; */
      transform: translateY(-8px);
    }
  }
  justify-content: space-between;
  width: 100%;
  margin-bottom: 60px;

  img {
    width: min(8.3vw, 80px);
    @media screen and (max-width: 480px) {
      width: min(10.41666vw, 50px);
    }
  }
`;

const StPlayerWrap = styled.div`
  background-color: black;
  width: ${({theme}) => theme.SW / 1.5}px;
  height: ${({theme}) => (theme.SW * 9) / (16 * 1.5)}px;
  @media screen and (max-width: 480px) {
    width: ${({theme}) => theme.SW}px;
    height: ${({theme}) => theme.SW * 9 / 16}px;
  }
`;

const StBotCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  width: ${({ theme }) => theme.SW / 1.5}px;
  @media screen and (max-width: 480px) {
    width: ${({ theme }) => theme.SW - 50}px;
  }
  margin-top: 50px;

  .ment {
    width: 100%;
  }

  .why {
    width: 100%;
    margin: 60px 0;
    /* @media screen and (max-width: 480px) {
      
    } */
  }
`;

const StImgCont = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  .img-div {
    width: 100%;
    height: 29.67vw;
    margin-right: 3.80208vw;
    @media screen and (max-width: 480px) {
      width: 100%;
      height: ${({ theme }) => theme.SW - 50}px;
      margin-bottom: 40px;
    }
    background-image: url(${props => props.imgUrl});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .hist-cont {
    width: 100%;
  }
  
`;
