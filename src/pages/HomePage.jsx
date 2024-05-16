import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
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
          <Link to="/uneHeure" className="link link1">
            Une heure
          </Link>
          <Link to="/demiJournee" className="link link2">
            Demi Journée
          </Link>
          <Link to="/weekend" className="link link3">
            Week-end
          </Link>
          <Link to="/quotidien" className="link link4">
            Au quotidien
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
