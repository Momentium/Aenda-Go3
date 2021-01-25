import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  body {
    background-color: #5a32de;

    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.5rem;
    }
  }

  div.text {
    width: fit-content;
    object-fit: contain;
    white-space: nowrap;
    vertical-align: middle;
    text-align: left;

    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;

    &.header {
      &.title {
        box-sizing: border-box;
        padding: 0 16px 4px 8px;
        font-size: 60px;
        font-weight: 900;
        /* line-height: 1.46; */
      }

      &.subtitle {
        padding-left: 8px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.6;
      }
    }
  }

  /* .line {
    width: 100%;
    height: 1px;
    background-color: #333333;
  } */

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
