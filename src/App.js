import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMode } from "./ModeContext";
import Landing from "./layouts/Landing/Landing";

//creating theme for mui Theme provider
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
  //getting mode from ModeContext
  const { mode } = useMode();

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      <Landing />
      
    </ThemeProvider>
  );
}

export default App;
