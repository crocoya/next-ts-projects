import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// IMPORT FONTS

// RESET CSS
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Bai Jamjuree', sans-serif;
}

h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

`;

export default GlobalStyle;
