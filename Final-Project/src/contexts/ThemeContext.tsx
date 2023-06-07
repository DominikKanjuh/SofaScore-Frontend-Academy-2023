import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light, ThemeType } from "@/components/theme/Theme";

interface ThemeContextProps {
  currentTheme: ThemeType;
  setCurrentTheme: (theme: ThemeType) => void;
}

const ThemeContext = React.createContext<ThemeContextProps>({
  currentTheme: light,
  setCurrentTheme: () => {},
});

const ThemeProviderWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(light);

  useEffect(() => {
    // Load theme from local storage
    const storedTheme = localStorage.getItem("theme");
    setCurrentTheme(storedTheme === "dark" ? dark : light);
  }, []);

  const handleSetCurrentTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme === dark ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme,
          setCurrentTheme: handleSetCurrentTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useTheming = (): ThemeContextProps =>
  React.useContext(ThemeContext);

export default ThemeProviderWrapper;
