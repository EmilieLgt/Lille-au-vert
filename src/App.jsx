import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ActivitiesContextProvider from "./assets/Context/ActivitiesContext";
import "./App.css";

function App() {
  return (
    <>
      <ActivitiesContextProvider>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </ActivitiesContextProvider>
    </>
  );
}

export default App;
