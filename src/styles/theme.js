import {createGlobalStyle} from "styled-components";
import { colors } from './colors';

const darkTheme = {
  body: colors.dark,
  textColor: colors.light
}

const lightTheme = {
  body: colors.light,
  textColor: colors.dark
}

const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 `;


 export {
     darkTheme,
     lightTheme,
     GlobalStyles
 }