import { useContext, createContext, useState, useCallback, ReactNode, FC } from "react";

interface ThemeContextProps {
    darkTheme: boolean;
    toggleDarkTheme: () => void;
  }

const ThemeContext = createContext<ThemeContextProps>();

export const useTheme = () =>  useContext(ThemeContext);

interface ThemeProviderProps {
    children: ReactNode;
  }

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [darkTheme, setDarkTheme ] = useState(false);

    const toggleDarkTheme = useCallback(() => {
        setDarkTheme((current) => !current)
    }, [darkTheme])

    return (
        <ThemeContext.Provider value={{ darkTheme , toggleDarkTheme }}>
            {children}
        </ThemeContext.Provider>
      );
}