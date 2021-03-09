import { createGlobalStyle } from "styled-components";
import theme from './theme';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  body {
    ${theme.selectNone};
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
  section {
    @media screen and (min-width: 481px) {
      padding: 0 ${theme.calcVW(120)};
    }
    @media screen and (max-width: 480px) {
      padding: 0 5vw;
    }
    box-sizing: border-box;
    width: 100%;
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
      font-weight: bold;
      line-height: 1;
      letter-spacing: -0.83px;

      @media screen and (min-width: 481px) {
        font-size: ${theme.calcVW(50)};
      }
      @media screen and (max-width: 480px) {
        font-size: min(6.25vw, 30px);
      }
    }

    &.intro {
      font-weight: 500;
      @media screen and (min-width: 481px) {
        font-size: ${theme.calcVW(39)};
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

      &.colored {
        color: #5a32de;
      }
    }

    &.program {
      text-align: center;

      &.label {
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(32)};
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
          font-size: ${theme.calcVW(79)};
        }
        @media screen and (max-width: 480px) {
          font-size: min(10.416666vw, 50px);
        }
        font-weight: bold;
        line-height: 1;
        height: ${theme.calcVW(117)};
        letter-spacing: -1.3px;
        color: #f85340;
      }

      &.subtitle {
        font-family: "TTSoopilmyungjoR020";
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(50)};
          line-height: 1.6;
        }
        @media screen and (max-width: 480px) {
          font-size: min(5.833333vw, 28px);
          line-height: 1.71;
          letter-spacing: -0.46px;
        }
        color: #ffffff;
      }

      &.kit-title {
        font-family: "TTSoopilmyungjoR040";
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(50)};
        }
        @media screen and (max-width: 480px) {
          font-size: min(16.6666vw, 40px);
        }
        line-height: 1;
        letter-spacing: -0.83px;
        color: #fb5640;
      }
      &.kit {
        font-family: "TTSoopilmyungjoR020";
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(30)};
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        white-space: pre;
        line-height: 2;
        color: #ffffff;
      }

      &.ment-title {
        font-family: "TTSoopilmyungjoR020";
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(30)};
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        line-height: 2;
        color: #fb5640;
      }
      &.ment {
        font-family: "TTSoopilmyungjoR020";
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(30)};
        }
        @media screen and (max-width: 480px) {
          font-size: min(4.5vw, 22px);
        }
        line-height: 2;
        color: #ffffff;
      }
    }

    &.artist {
      &.name {
        font-weight: bold;
        line-height: 1.25;
        text-align: center;
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(40)};
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
          font-size: ${theme.calcVW(25)};
        }
        @media screen and (max-width: 480px) {
          font-size: min(3.3vw, 16px);
        }
      }

      &.title {
        font-size: ${theme.calcVW(79)};
        line-height: 1;
        letter-spacing: -1.3px;
        font-weight: bold;
        color: #f85340;
      }
      &.ment {
        font-family: "TTSoopilmyungjoR020";
        color: #ffffff;
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(30)};
          line-height: 2;
        }
        @media screen and (max-width: 480px) {
          font-size: min(5.83333vw, 26px);
          line-height: 10vw;
        }
      }
      &.why {
        font-family: "TTSoopilmyungjoR020";
        color: #ffffff;
        text-align: center;
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(50)};
          line-height: 1.6;
          letter-spacing: -0.83px;
        }
        @media screen and (max-width: 480px) {
          font-size: min(7.29166vw, 35px);
          line-height: 1.86;
          letter-spacing: -0.58px;
        }
      }
      &.hist {
        font-family: "TTSoopilmyungjoR020";
        color: #fe573d;
        white-space: pre;
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(50)};
          line-height: 1.6;
        }
        @media screen and (max-width: 480px) {
          font-size: min(5.83333vw, 28px);
          line-height: 1.71;
        }
      }
      &.sub {
        font-family: "TTSoopilmyungjoR020";
        color: #fe573d;
        white-space: pre;
        @media screen and (min-width: 481px) {
          font-size: ${theme.calcVW(40)};
          line-height: 1.6;
        }
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
      font-size: ${theme.calcVW(25)};
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
      font-size: ${theme.calcVW(25)};
      @media screen and (max-width: 480px) {
        font-size: min(5.2083vw, 25px);
      }

      &.guide {
        align-items: stretch;
        flex-direction: column;
      }
    }

    &.modal {
      font-weight: 500;
      line-height: 1.25;
      text-align: center;
      color: #ffffff;
      font-size: ${theme.calcVW(40)};
      @media screen and (max-width: 480px) {
        font-size: min(8.33333vw, 40px);
        white-space: nowrap;
      }
    }

    &.footer {
      font-weight: 500;
      line-height: 1.78;
      color: #555555;

      @media screen and (min-width: 481px) {
        font-size: ${theme.calcVW(18)};
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
  }
  
  span.hash-tag {
    font-weight: 500;
    @media screen and (min-width: 481px) {
      font-size: ${theme.calcVW(40)};
      line-height: 1.25;
      letter-spacing: -0.66px;
    }
    @media screen and (max-width: 480px) {
      font-size: min(5.208vw, 25px);
      line-height: 1.67;
      letter-spacing: -0.5px;
    }
  }

  input, textarea {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: ${theme.calcVW(25)};
  }
`;

export default GlobalStyle;