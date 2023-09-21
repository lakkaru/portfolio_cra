import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Landing from "./layouts/Landing/Landing";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [mode, setMode] = useState('light');

  const onSelectMode = (mode) => {
    console.log(mode);
    // setMode(mode)
    if (mode === 'dark')
      // document.body.classList.add('dark-mode
    setMode(darkTheme);
    else
    setMode(lightTheme);
  }
  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));
  
    // Setup dark/light mode for the first time
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  
    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);
  return (
    <ThemeProvider theme={mode}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
