import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    font-size: 1.6rem;
    background-color: #040011;
    color: #ffffff;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export { GlobalStyle };
