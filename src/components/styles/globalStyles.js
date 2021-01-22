import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  body {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width: 768px) {
      font-size: 0.5rem;
    }
  }

  header {
    
  }

  footer {

  }

  section {
    padding: 0 6.5%;
  }

  article {

  }

  .text {
    object-fit: contain;
    white-space: nowrap;
  }

  
`;
 
export default GlobalStyle;