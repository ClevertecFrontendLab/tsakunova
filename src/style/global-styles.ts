import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,
*:before,
*:after {
  box-sizing: border-box;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

body,
h1,
h2,
h3,
h4,
p,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  display: contents;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  display: block;
}

article>*+* {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  padding: 0;
  font: inherit;
}
`;
