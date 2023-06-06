import { ThemeType, dark, light } from "@/components/theme/Theme";
import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeContextProps {
  currentTheme: ThemeType;
  toggleTheme: () => void;
  setCurrentTheme: (theme?: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: null,
  toggleTheme: () => {},
  setCurrentTheme: () => {},
});

export default function Theme({ children }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(light);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === light ? dark : light);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme,
          toggleTheme,
          setCurrentTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export const useTheming = () => useContext(ThemeContext);
