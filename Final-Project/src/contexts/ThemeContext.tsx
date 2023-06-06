import { ThemeType, dark, light } from "@/components/theme/Theme";
import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme?: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: null,
  toggleTheme: () => {},
  setTheme: () => {},
});

export default function Theme({ children }) {
  const [theme, setTheme] = useState<ThemeType>(light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export const useTheming = () => useContext(ThemeContext);
