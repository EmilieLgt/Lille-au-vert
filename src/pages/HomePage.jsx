import { useContext } from "react";
import { Link } from "react-router-dom";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import "./HomePage.css";

function HomePage() {
  const { handleClick } = useContext(ActivitiesContext);

  return (
    <div className="page_accueil">
      <p className="introduction">
        Nous passons tant de temps par jour sur nos écrans. Même en ville, on
        peut se connecter à la nature ! Après avoir trouvé ton activité, lâche
        ce téléphone ❤️
      </p>
      <div className="menu">
        <p className="question">Combien de temps pour te déconnecter ?</p>
        <Link to="/" className="accueil">
          Accueil
        </Link>
        <div className="links">
          <Link to="/uneHeure" className="link link1" onClick={handleClick}>
            Une heure
          </Link>
          <Link to="/demiJournee" className="link link2" onClick={handleClick}>
            Demi Journée
          </Link>
          <Link to="/weekend" className="link link3" onClick={handleClick}>
            Week-end
          </Link>
          <Link to="/quotidien" className="link link4" onClick={handleClick}>
            Au quotidien
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
