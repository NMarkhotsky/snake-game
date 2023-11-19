import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Agbalumo', sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;
  
  background-color: #ffd;

  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
}
}


h1,
p {
  margin: 0;
}
`;
