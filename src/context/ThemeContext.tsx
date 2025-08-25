import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";


//Types-----------------------------------
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

//Context initialization-----------------------------
export const ThemeContext = createContext<ThemeContextType | undefined>({
  theme: "light",
  toggleTheme: () => {},
});


//Context provider------------------------------------------
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  //When theme changes it sets the data-theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  //Changes the current value of the theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  //Memo to avoid rerenders
  const value = useMemo(()=>({
    theme, toggleTheme
  }), [theme])

    return (
    <ThemeContext.Provider value={value}>
      { children }
    </ThemeContext.Provider>
  )
  
};


//Custom hook
export const useTheme = () => useContext(ThemeContext)