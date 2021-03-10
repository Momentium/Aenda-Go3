import React, { useContext } from "react";
import ReactPlayer from "react-player";
import styled, { ThemeContext } from "styled-components";
import { artistData } from "../../../../data/data";

const ArtistPage = ({ _idx, closePage }) => {
  const theme = useContext(ThemeContext);
  const data = artistData[Number(_idx)];
  const renderName = () => {
    let _return;
    switch(_idx) {
      case '1':
      case '3':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '15':
        _return = [`${data.aka}.`, `${data.name}`];
        break;
      case '12':
        _return = [`${data.name}`]
        break;
      default:
        _return = [`${data.aka}. ${data.name}`]
        break;
    }
    return _return;
  }

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
        <img src="/assets/icons/left-wing.svg" alt="left-wing" />
        <div className="text artist title">
          {renderName()[0]}
        </div>
        <img src="/assets/icons/right-wing.svg" alt="right-wing" />
      </StTitleCont>

      {
        renderName().length > 1 && 
        <div className="text artist title">{renderName()[1]}</div>
      }

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
        
        {
          window.innerWidth > 480 ?
          <>
            <div className="text artist ment">{data.ment}</div>
            <div className="text artist why">{data.why}</div>
          </>
          :
          <>
            <div className="text artist ment">{data.ment_m}</div>
            <div className="text artist why">{data.why_m}</div>
          </>
        }

        <StImgCont dataIdx={_idx} imgUrl={data.img}>
          <div className="img-div"/>
          <div className="hist-cont">
            {data.hist.map((el, idx) => {
              if(_idx === '12' && window.innerWidth <= 480) {
                return (
                  <div key={idx} className="text artist hist">
                    {`플라스틱 쓰레기를 모으고,\n분쇄하고, 제작하는 과정을 통해\n새로운 가치를 지닌 제품으로 \n만들어요.`}
                  </div>
                )
              }

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
    padding-top: ${({theme}) => theme.calcVW_M(35)};
    padding-bottom: ${({theme}) => theme.calcVW_M(70)};
  }
`;

const StTopCont = styled.div`
  ${({theme}) => theme.flex('flex-end', 'flex-end')};
  width: 100%;

  @media screen and (min-width: 481px) {
    padding: 0 ${({theme}) => theme.calcVW(106)};
    .close {
      cursor: pointer;
      width: ${({theme}) => theme.calcVW(30)};
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0 ${({theme}) => theme.calcVW_M(32)};
    .close {
      width: ${({theme}) => theme.calcVW_M(30)};
    }
  }
`;

const StTitleCont = styled.div`
  ${({theme}) => theme.flex('space-between', 'center')};
  width: 100%;
  img {
    object-fit: cover;
    &:first-child {
      object-position: right;
    }
    &:last-child {
      object-position: left;
    }
  }

  @media screen and (min-width: 481px) {
    margin-top: ${({theme}) => theme.calcVW(91.64)};
    img {
      width: ${({theme}) => theme.calcVW(158)};
      height: ${({theme}) => theme.calcVW(67)};
    }
  }
  @media screen and (max-width: 480px) {
    margin-top: ${({theme}) => theme.calcVW_M(64.73)};
    img {
      height: ${({theme}) => theme.calcVW_M(24.31)};
      width: ${({theme}) => theme.calcVW_M(52)};
    }
  }
`;

const StPlayerWrap = styled.div`
  background-color: black;
  @media screen and (min-width: 481px) {
    margin-top: ${({theme}) => theme.calcVW(141.67)};
    width: ${({theme}) => theme.SW / 1.5}px;
    height: ${({theme}) => (theme.SW * 9) / (16 * 1.5)}px;
  }
  @media screen and (max-width: 480px) {
    margin-top: ${({theme}) => theme.calcVW_M(51.73)};
    width: ${({theme}) => theme.SW}px;
    height: ${({theme}) => theme.SW * 9 / 16}px;
  }
`;

const StBotCont = styled.div`
  ${({theme}) => theme.flex('center', 'center', 'column')};
  @media screen and (min-width: 481px) {
    margin-top: ${({theme}) => theme.calcVW(100)};
    width: ${({ theme }) => theme.SW / 1.5}px;
  }
  @media screen and (max-width: 480px) {
    margin-top: ${({theme}) => theme.calcVW_M(53.52)};
    width: ${({ theme }) => theme.SW - 50}px;
  }

  .ment {
    width: 100%;
  }
  .why {
    @media screen and (min-width: 481px) {
      margin-top: ${({theme}) => theme.calcVW(90)};
      margin-bottom: ${({theme}) => theme.calcVW(116)};
    }
    @media screen and (max-width: 480px) {
      margin-top: ${({theme}) => theme.calcVW_M(78)};
      margin-bottom: ${({theme}) => theme.calcVW_M(102)};
    }
  }
`;

const StImgCont = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 100%;
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
      height: ${props => props.dataIdx === '15' ? 
        props.theme.calcVW_M(500)
        :
        props.theme.calcVW_M(430)
      };
      margin-bottom: ${({theme}) => theme.calcVW_M(45)};
    }
  }
`;
