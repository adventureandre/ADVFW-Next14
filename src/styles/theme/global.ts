import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${(props) => props.theme['green-500']};
  }`