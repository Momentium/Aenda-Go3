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

        <StImgCont dataIdx={_idx} imgUrl={data.img}>
          <div className="img-div"/>
          <div className="hist-cont">
            {data.hist.map((el, idx) => {
              const _foo = el.split('-');
              if(_idx === '7' && _foo.length > 1) {
                return (
                  <>
                    <div key={idx} className="text artist hist">
                      {_foo[0]}
                    </div>
                    <div className="text artist sub">
                      {`- ${_foo[1]}`}
                    </div>
                  </>
                );  
              }
              else {
                return (
                  <div key={idx} className="text artist hist">
                    {el}
                  </div>
                )
              }
            })}
          </div>
        </StImgCont>
      </StBotCont>
    </StPageWrap>
  );
};

export default ArtistPage;

const StPageWrap = styled.div`
  word-break: keep-all;
  background: ${({ theme }) => `${theme.colors.blue}`};
  ${({theme}) => theme.flex('center', 'center', 'column')};
  width: 100%;

  @media screen and (min-width: 481px) {
    padding-top: ${({theme}) => theme.calcVW(121.5)};
    padding-bottom: ${({theme}) => theme.calcVW(214)};
  }
  @media screen and (max-width: 480px) {
    padding-top: 30px;
    padding-bottom: 90px;
  }

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* .line {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => `${theme.colors.red}`};
  } */

`;

const StTopCont = styled.div`
  ${({theme}) => theme.flex('flex-end', 'flex-end')};
  width: 100%;
  padding: 0 ${({theme}) => theme.calcVW(106)};

  .close {
    @media screen and (min-width: 481px) {
      cursor: pointer;
      width: ${({theme}) => theme.calcVW(30)};
    }
    @media screen and (max-width: 480px) {
      width: 6.25vw;
    }
  }
`;

const StTitleCont = styled.div`
  ${({theme}) => theme.flex('space-between', 'center')};
  width: 100%;
  margin-top: ${({theme}) => theme.calcVW(91.64)};
  margin-bottom: ${({theme}) => theme.calcVW(141.67)};

  @media screen and (max-width: 480px) {
    align-items: flex-start;
    div.title {
      transform: translateY(-8px);
    }
  }

  img {
    @media screen and (min-width: 481px) {
      width: ${({theme}) => theme.calcVW(158)};
      height: ${({theme}) => theme.calcVW(67)};
    }
    @media screen and (max-width: 480px) {
      width: min(10.41666vw, 50px);
    }
  }
`;

const StPlayerWrap = styled.div`
  background-color: black;
  @media screen and (min-width: 481px) {
    width: ${({theme}) => theme.SW / 1.5}px;
    height: ${({theme}) => (theme.SW * 9) / (16 * 1.5)}px;
  }
  @media screen and (max-width: 480px) {
    width: ${({theme}) => theme.SW}px;
    height: ${({theme}) => theme.SW * 9 / 16}px;
  }
`;

const StBotCont = styled.div`
  ${({theme}) => theme.flex('center', 'center', 'column')};
  @media screen and (min-width: 481px) {
    width: ${({ theme }) => theme.SW / 1.5}px;
  }
  @media screen and (max-width: 480px) {
    width: ${({ theme }) => theme.SW - 50}px;
  }
  margin-top: ${({theme}) => theme.calcVW(100)};

  .ment {
    width: 100%;
  }
  .why {
    margin-top: ${({theme}) => theme.calcVW(90)};
    margin-bottom: ${({theme}) => theme.calcVW(116)};
  }
`;

const StImgCont = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  .img-div {
    ${props => {
      switch(props.dataIdx) {
        case '5':
        case '6':
          return props.theme.backImg(props.imgUrl, 'center')
        default:
          return props.theme.backImg(props.imgUrl, 'top')
      }  
    }};
    
    @media screen and (min-width: 481px) {
      width: ${({theme}) => theme.calcVW(603)};
      height: ${props => props.dataIdx === '15' ? 
        props.theme.calcVW(700)
        :
        props.theme.calcVW(560)
      };
      margin-right: ${({theme}) => theme.calcVW(73)};
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      height: ${({ theme }) => theme.SW - 50}px;
      margin-bottom: 40px;
    }
  }
`;
