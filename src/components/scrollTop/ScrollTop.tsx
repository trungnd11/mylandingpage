import { useContext } from "react";
import { fadeInRightBig } from "react-animations";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../ContextTheme/ContextTheme";

const titleInAnimation = keyframes`${fadeInRightBig}`;

const Content = styled.div`
  animation: 1s ${titleInAnimation} forwards;
`;

export default function ScrollTop() {
  const { theme } = useContext(ThemeContext);

  const onTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <Content
      className={`onTop ${theme === "dark" && "onTop-dark"}`}
      onClick={onTop}
    >
      <i
        className={`fa-solid fa-arrow-turn-up ${
          theme === "dark" && "icon-dark"
        }`}
      ></i>
    </Content>
  );
}
