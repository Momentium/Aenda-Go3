import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  body {
    /* user-select: none; */
    background-color: #5a32de;

    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;;
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

    &.header {
      &.title {
        box-sizing: border-box;
        padding: 0 16px 4px 8px;

        font-size: min(6.25vw, 60px);
        font-weight: 900;
        /* line-height: 1.46; */
        
        transform: translateX(-8px);
      }

      &.subtitle {
        font-size: min(2.6vw, 25px);
        font-weight: bold;
        line-height: 1.6;
      }
    }

    &.drawer {
      font-size: min(2.6vw, 25px);
      font-weight: bold;
      line-height: 1;
      letter-spacing: -0.66px;
    }

    &.intro {
      font-size: min(2vw, 20px);
      font-weight: 500;
      line-height: 1.71;
      color: #111111;

      .colored {
        color: #5a32de;
      }
    }

    &.footer {
      font-size: min(0.9375vw, 12px);

      font-weight: 500;
      line-height: 1.78;
      color: #555555;

      &.link {
        cursor: pointer;
      }
    }

    &.program {
      &.label {
        font-size: min(1.7vw, 20px);
        font-weight: bold;
        line-height: 1.56;
        letter-spacing: -0.53px;
        text-align: center;
        color: #ffffff;
      }

      &.title {
        font-size: 39.5px;
        font-weight: bold;
        line-height: 1;
        letter-spacing: -1.3px;
        /* text-align: center; */
        color: #f85340;
      }

      &.subtitle {
        font-size: 20px;
        font-weight: normal;
        line-height: 1.75;
        text-align: center;
        color: #ffffff;
        white-space: pre-line;
      }

      &.kit-title {
        font-size: 25px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: -0.83px;
        text-align: left;
        color: #fb5640;
      }
      &.kit {
        font-size: 15px;
        font-weight: normal;
        line-height: 2;
        text-align: left;
        color: #ffffff;
        white-space: pre-line;
      }

      &.kit-intro-title {
        font-size: 15px;
        font-weight: 600;
        line-height: 2.17;
        letter-spacing: -0.5px;
        color: #fb5640;
        text-align: center;
      }
      &.kit-intro {
        font-size: 15px;
        font-weight: normal;
        line-height: 2.17;
        letter-spacing: -0.5px;
        text-align: center;
        color: #ffffff;
        white-space: pre-line;
      }
    }
  }
  
  span.hash-tag {
    font-size: min(2vw, 20px);
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.66px;
  }

  header {

  }

  section {
    padding: 0 6.5%;
    box-sizing: border-box;
    width: 100%;
  }

  article {

  }

  footer {

  }
  
`;

export default GlobalStyle;
