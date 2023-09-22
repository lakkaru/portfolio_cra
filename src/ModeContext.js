import { createContext, useContext, useState, useEffect } from "react";

const ModeContext = createContext("dark");

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  //getting user environment mode--------------
  const onSelectMode = (mode) => {
    // setMode(mode)
    if (mode === "dark")
      setMode("dark");
    else setMode("light");
  };
  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light")
      );

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);
//getting user environment mode--------------

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
