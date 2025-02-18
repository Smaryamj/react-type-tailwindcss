import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the types for the context values
type Theme = "light" | "dark";
type LocalLang = "ar" | "en";

interface LocalLangType {
    localeLang: LocalLang,
    toggleLocaleLang: (_t: string) => void,
}
// Create the context with a default value of null
const LocalLongContext = createContext<LocalLangType | undefined>(undefined);

// Create the provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const savedLocalLang = localStorage.getItem("themeLanguage") as LocalLang || "en";
  const [localeLang, setLocalLang] = useState<LocalLang>(savedLocalLang)

  // Function to toggle theme

  const toggleLocaleLang = (_t: string) => {
    const newLang = _t === "en" ? "en" : "ar";
    setLocalLang(newLang);
    localStorage.setItem("themeLanguage", newLang); // Save theme to localStorage
  };

  return (
    <LocalLongContext.Provider value={{ localeLang, toggleLocaleLang }}>
      {children}
    </LocalLongContext.Provider>
  );
};

// Custom hook to use theme context
export const useLangugageContext = (): LocalLangType => {
  const context = useContext(LocalLongContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
