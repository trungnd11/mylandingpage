import { useState, createContext, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}
const ThemeContext = createContext<any>(null);

export default function ContextTheme(prop: Props) {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {prop.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
