import  ActivitiesContextProvider from "./assets/Context/ActivitiesContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ActivitiesProvider } from "./assets/Context/ActivitiesContext";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
    <ActivitiesProvider>
      <main>
        <Outlet />
      </main>
    </ActivitiesProvider>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
