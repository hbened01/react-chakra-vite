import { useState } from "react";
import "./App.css";
import { 
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset 
} from "@chakra-ui/react";
import { ThemeToggler } from './components'
import { LoginForm } from './pages'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <LoginForm />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
