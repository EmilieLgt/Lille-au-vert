import { useState } from "react";
import { ActivitiesProvider } from "./assets/Context/ActivitiesContext";
import "./App.css";

function App() {
  return (
    <>
      <ActivitiesProvider>{/* MAIN ET OUTLET */}</ActivitiesProvider>
    </>
  );
}

export default App;
