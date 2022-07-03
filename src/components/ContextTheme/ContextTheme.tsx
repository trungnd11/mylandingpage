import { useState, createContext, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}
const ThemeContext = createContext<any>(null);

export default function ContextTheme(prop: Props) {

  const setThemeLocal = (key: string,themeSetting: string) => {
    localStorage.setItem(key, themeSetting);
  }

  const getThemeLocal = (key: string) => {
    return localStorage.getItem(key);
  }

  const [theme, setTheme] = useState<string>(getThemeLocal("theme") || "light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setThemeLocal("theme", theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {prop.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
