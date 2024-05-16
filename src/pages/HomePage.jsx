
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import "./HomePage.css";

function HomePage() {
  const { handleClick } = useContext(ActivitiesContext);

  return (
    <div className="page_accueil">
      <p className="introduction">
       Nous passons en moyenne <span className="bold-text">3h30 sur notre téléphone par jour</span>. <br/> <br/>  Vous êtes<span className="bold-text"> lillois.e et cherchez à vous déconnecter </span>le temps d'une heure, d'une après-midi ou d'un week-end ? Vous êtes au bon endroit !
       Même en ville, on peut se connecter à la nature. On vous laisse explorer les activités possibles selon votre temps disponible.
       <br/> <br/> <span className="bold-text">Après avoir trouvé votre activité, lâchez ce téléphone ❤️</span> 
      </p>
      <div className="menu">
        <p className="question">Combien de temps vous accordez-vous pour déconnecter ?</p>
        <Link to="/" className="accueil">
          Accueil
        </Link>
        <div className="links">
          <Link
            to="/activites/uneheure"
            className="link link1"
            onClick={handleClick}
          >
            Une heure
          </Link>
          <Link
            to="/activites/demijournee"
            className="link link2"
            onClick={handleClick}
          >
            Demi Journée
          </Link>
          <Link
            to="/activites/weekend"
            className="link link3"
            onClick={handleClick}
          >
            Week-end
          </Link>
          <Link
            to="/activites/quotidien"
            className="link link4"
            onClick={handleClick}
          >
            Au quotidien
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
