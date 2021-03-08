import { createGlobalStyle } from "styled-components";
import theme from './theme';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #5a32de;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    * {
      box-sizing: border-box;
    }

    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      display: none;
    }
  }

  div.text {
    display: flex;
    align-items: center;
    width: fit-content;
    vertical-align: center;
    object-fit: contain;
    text-align: left;

    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    white-space: pre-line;

    &.header {
      &.title {
        padding: 0 ${theme.calcVW(36)} ${theme.calcVW(12)} ${theme.calcVW(8)};
        font-weight: 900;
        transition: all 1s ease;
        height: ${theme.calcVW(160)};
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(120)};
          /* transform: translateX(-8px); */
        }
        @media screen and (max-width: 480px) {
          font-size: min(11.5vw, 56px);
          white-space: nowrap;
        }
      }

      &.subtitle {
        font-weight: bold;
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(50)};
          line-height: 1.6;
        }
        @media screen and (max-width: 480px) {
          font-size: min(5.8vw, 28px);
          line-height: 1.55;
        }
        
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
      font-weight: 500;
      line-height: 1.78;
      color: #555555;
      @media screen and (min-width: 481px) {
        font-size: min(0.9375vw, 12px);
      }
      @media screen and (max-width: 480px) {
        font-size: min(3.75vw, 18px);
      }

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
          font-size: min(10.416666vw, 50px);
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
          line-height: 1.75;
        }
        @media screen and (max-width: 480px) {
          font-size: min(5.833333vw, 28px);
          line-height: 1.71;
          letter-spacing: -0.46px;
        }
        font-weight: normal;
        color: #ffffff;
      }

      &.kit-title {
        font-family: "TTSoopilmyungjoR040";
        @media screen and (min-width: 481px) {
          font-size: min(2.60416vw, 25px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(16.6666vw, 40px);
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
        white-space: pre;
        font-weight: normal;
        line-height: 2;
        color: #ffffff;
      }

      &.ment-title {
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
      &.ment {
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
        font-weight: bold;
        line-height: 2;
        text-align: center;
        @media screen and (min-width: 481px) {
          font-size: min(1.7vw, 20px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
      }
      &.aka {
        font-weight: normal;
        line-height: 2;
        text-align: center;
        @media screen and (min-width: 481px) {
          font-size: min(1.3vw, 12.5px);
        }
        @media screen and (max-width: 480px) {
          font-size: min(3.3vw, 16px);
        }
      }

      &.title {
        font-size: min(42vw, 39.5px);
        font-weight: bold;
        text-align: center;
        color: #f85340;
      }

      &.ment {
        font-family: "TTSoopilmyungjoR020";
        font-size: min(1.875vw, 18px);
        line-height: 2;
        text-align: left;
        color: #ffffff;
        @media screen and (max-width: 480px) {
          font-size: min(5.83333vw, 26px);
          line-height: 10vw;
        }
      }
      &.why {
        font-family: "TTSoopilmyungjoR020";
        font-size: min(2.9166vw, 28px);
        line-height: 1.6;
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
      font-weight: 500;
      line-height: 2;
      text-align: center;
      color: #fe573d;
      font-size: min(1.3vw, 12.5px);
      @media screen and (max-width: 480px) {
        font-size: min(3.125vw, 15px);
      }
    }

    &.msg {
      white-space: nowrap;
      font-weight: 500;
      line-height: 2;
      text-align: left;
      color: #333333;
      font-size: min(1.3vw, 12.5px);
      @media screen and (max-width: 480px) {
        font-size: min(5.2083vw, 25px);
      }
    }

    &.modal {
      font-weight: 500;
      line-height: 1.25;
      text-align: center;
      color: #ffffff;
      font-size: min(1.7vw, 20px);
      @media screen and (max-width: 480px) {
        font-size: min(8.33333vw, 40px);
        white-space: nowrap;
      }
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
      padding: 0 6.77083333%;
    }
    @media screen and (max-width: 480px) {
      padding: 0 5vw;
    }
    box-sizing: border-box;
    width: 100%;
  }

  input, textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;