import React from "react";
import ChildrenDemo from "./pages/ChildrenDemo/ChildrenDemo";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChildrenDemo />
      </ThemeProvider>
    </div>
  );
}

export default App;
