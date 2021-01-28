import style from "styled-components";
import { createGlobalStyle } from "styled-components";
import db from "../db.json";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: "Lato", "Roboto", Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html,
  body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const BackgroundImage = style.main`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  background-color: #000000;

`;

//-webkit-transform: scaleX(-1);
//transform: scaleX(-1);

export const QuizzContainer = style.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen only and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
