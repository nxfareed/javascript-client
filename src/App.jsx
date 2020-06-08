import React from "react";
import Trainee from "./pages/Trainee/index";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      {/* Use either of the two defined pages at a time as told in the task. */}
      {/* <Login /> */}
      <Trainee />
    </div>
  );
}

export default App;
