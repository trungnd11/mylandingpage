import { useContext } from "react";
import { ThemeContext } from "../ContextTheme/ContextTheme";
export default function ScrollTop() {
  const { theme } = useContext(ThemeContext);

  const onTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <div
      className={`onTop ${theme === "dark" && "onTop-dark"}`}
      onClick={onTop}
    >
      <i
        className={`fa-solid fa-arrow-turn-up ${
          theme === "dark" && "icon-dark"
        }`}
      ></i>
    </div>
  );
}
