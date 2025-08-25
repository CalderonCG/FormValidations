import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeButton.scss";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme" onClick={() => toggleTheme()}>
      {theme === "light" ? (
        <FaMoon className="icon_moon" />
      ) : (
        <FaSun className="icon_sun" />
      )}
    </button>
  );
}

export default ThemeButton;
