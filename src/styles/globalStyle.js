import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 80px",
  bgColor: "#1d1d1d",
  color: "white",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: white;
}
body{
    word-break: keep-all;
    background-color: ${mainStyle.bgColor};
    color: ${mainStyle.color};
}
`;
