import { createGlobalStyle } from "styled-components";
import font010 from "./font/TTSoopilmyungjoR010.woff";
import font020 from "./font/TTSoopilmyungjoR020.woff";
import font040 from "./font/TTSoopilmyungjoR040.woff";
const calcVW = (_px, _w) => {
  return `${_px/_w}vw`;
}
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "TTSoopilmyungjoR010";
    src: local("TTSoopilmyungjoR010"),
    url(${font010}) format("woff");
  }
  @font-face {
    font-family: "TTSoopilmyungjoR020";
    src: local("TTSoopilmyungjoR020"),
    url(${font020}) format("woff");
  }
  @font-face {
    font-family: "TTSoopilmyungjoR040";
    src: local("TTSoopilmyungjoR040"),
    url(${font040}) format("woff");
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  body {
    /* user-select: none; */
    background-color: #5a32de;

    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1rem;
    /* @media screen and (max-width: 768px) {
      font-size: 0.5rem;
    } */

    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  div.text {
    width: fit-content;
    object-fit: contain;
    white-space: nowrap;
    vertical-align: baseline;
    text-align: left;

    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    white-space: pre-line;

    &.header {
      &.title {
        box-sizing: border-box;
        padding: 0 16px 4px 8px;
        font-weight: 900;
        transition: all 1s ease;
        
        @media screen and (min-width: 481px) {
          font-size: min(6.25vw, 60px);
          transform: translateX(-8px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(11.5vw, 56px);
          white-space: nowrap;
        }
      }

      &.subtitle {
        @media screen and (min-width: 481px) {
          font-size: min(2.6vw, 25px);
          line-height: 1.6;
        }
        @media screen and (max-width: 480px) {
          font-size: min(5.8vw, 28px);
          line-height: 1.55;
        }
        font-weight: bold;
        
      }
    }

    &.drawer {
      font-size: min(2.6vw, 25px);
      font-weight: bold;
      line-height: 1;
      letter-spacing: -0.66px;

      @media screen and (min-width: 481px) {
        font-size: min(2.6vw, 25px);
      }
      @media screen and (max-width: 480px) {
        font-size: min(6.25vw, 30px);
      }
    }

    &.intro {
      font-weight: 500;
      @media screen and (min-width: 481px) {
        font-size: min(2vw, 20px);
        line-height: 1.71;
        color: #111111;
      }
      @media screen and (max-width: 480px) {
        word-break: keep-all;
        font-size: min(5vw, 24px);
        line-height: 1.8;
        letter-spacing: -0.41px;
        color: #333333;
      }

      .colored {
        color: #5a32de;
      }
    }

    &.footer {
      @media screen and (min-width: 481px) {
        font-size: min(0.9375vw, 12px);
      }
      @media screen and (max-width: 480px) {
        font-size: min(3.75vw, 18px);
      }
      
      font-weight: 500;
      line-height: 1.78;
      color: #555555;

      &.link {
        @media screen and (min-width: 481px) {
          cursor: pointer;
        }
      }
    }

    &.program {
      text-align: center;

      &.label {
        @media screen and (min-width: 481px) {
          font-size: min(1.7vw, 20px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        font-weight: bold;
        line-height: 1.56;
        letter-spacing: -0.53px;
        color: #ffffff;
      }

      &.title {
        @media screen and (min-width: 481px) {
          font-size: min(4.11458vw, 39.5px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        font-weight: bold;
        line-height: 1;
        letter-spacing: -1.3px;
        color: #f85340;
      }

      &.subtitle {
        font-family: "TTSoopilmyungjoR020";
        @media screen and (min-width: 481px) {
          font-size: min(2.60416vw, 25px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        font-weight: normal;
        line-height: 1.75;
        color: #ffffff;
      }

      &.kit-title {
        font-family: "TTSoopilmyungjoR040";
        @media screen and (min-width: 481px) {
          font-size: min(2.60416vw, 25px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        font-weight: 500;
        line-height: 1;
        letter-spacing: -0.83px;
        color: #fb5640;
      }
      &.kit {
        font-family: "TTSoopilmyungjoR020";
        @media screen and (min-width: 481px) {
          font-size: min(1.5625vw, 15px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        font-weight: normal;
        line-height: 2;
        color: #ffffff;
      }

      &.kit-intro-title {
        font-family: "TTSoopilmyungjoR020";
        @media screen and (min-width: 481px) {
          font-size: min(1.5625vw, 15px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        font-weight: 600;
        line-height: 2.17;
        letter-spacing: -0.5px;
        color: #fb5640;
        text-align: center;
      }
      &.kit-intro {
        font-family: "TTSoopilmyungjoR020";
        @media screen and (min-width: 481px) {
          font-size: min(1.5625vw, 15px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        font-weight: normal;
        line-height: 2.17;
        letter-spacing: -0.5px;
        text-align: center;
        color: #ffffff;
      }
    }

    &.artist {
      &.name {
        @media screen and (min-width: 481px) {
          font-size: min(1.7vw, 20px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        font-weight: bold;
        line-height: 2;
        text-align: center;
      }
      &.aka {
        @media screen and (min-width: 481px) {
          font-size: min(1.3vw, 12.5px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(3.3vw, 16px);
        }
        font-weight: normal;
        line-height: 2;
        text-align: center;
      }

      &.title {
        font-size: min(42vw, 39.5px);
        font-weight: bold;
        text-align: center;
        color: #f85340;
      }

      &.ment {
        font-family: "TTSoopilmyungjoR020";
        font-size: min(15.6vw, 15px);
        line-height: 2;
        text-align: left;
        color: #ffffff;
        @media screen and (max-width: 480px) {
          font-size: min(5.83333vw, 28px);
          line-height: 10vw;
        }
      }
      &.why {
        font-family: "TTSoopilmyungjoR020";
        font-size: min(2.6041666vw, 25px);
        line-height: 1;
        letter-spacing: -0.83px;
        text-align: center;
        color: #ffffff;
        @media screen and (max-width: 480px) {
          font-size: min(7.29166vw, 35px);
          line-height: 1.86;
          letter-spacing: -0.58px;
        }
      }
      &.hist {
        font-family: "TTSoopilmyungjoR020";
        font-size: min(26vw, 25px);
        line-height: 1.6;
        text-align: left;
        color: #fe573d;
        @media screen and (max-width: 480px) {
          font-size: min(5.83333vw, 28px);
          line-height: 1.71;
        }
      }
    }

    &.gallery {
      font-size: min(1.3vw, 12.5px);
      font-weight: 500;
      line-height: 2;
      text-align: center;
      color: #fe573d;
    }

    &.msg {
      white-space: nowrap;
      font-size: min(1.3vw, 12.5px);
      @media screen and (max-width: 480px) {
        font-size: min(5.2083vw, 25px);
      }
      font-weight: 500;
      line-height: 2;
      text-align: left;
      color: #333333;
    }

    &.modal {
      font-size: min(1.7vw, 20px);
      @media screen and (max-width: 480px) {
        font-size: min(8.33333vw, 40px);
        white-space: nowrap;
      }
      font-weight: 500;
      line-height: 1.25;
      text-align: center;
      color: #ffffff;
    }
  }
  
  span.hash-tag {
    @media screen and (min-width: 481px) {
      font-size: min(2vw, 20px);
      line-height: 1.25;
      letter-spacing: -0.66px;
    }
    @media screen and (max-width: 480px) {
      font-size: min(5.208vw, 25px);
      line-height: 1.67;
      letter-spacing: -0.5px;
    }
    font-weight: 500;
  }

  section {
    @media screen and (min-width: 481px) {
      padding: 0 6.5%;
    }
    @media screen and (max-width: 480px) {
      padding: 0 5vw;
    }
    box-sizing: border-box;
    width: 100%;
  }

  
`;

export default GlobalStyle;