import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 50%;
    }
  }

  .text {
    object-fit: contain;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
 
export default GlobalStyle;