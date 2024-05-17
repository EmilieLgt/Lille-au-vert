import { useContext} from "react";
import { Link } from "react-router-dom";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import Card from "../components/Card";

function RandomActivity() {
  const { randomActivity, activityIndex } =
    useContext(ActivitiesContext);

  return (
    <div className="pageBlock">
      <div className="topPage">
        <h2 className="titlePage">Activité aléatoire</h2>
        <Link to="/" className="linkTo">
          <img
            className="logoAccueil"
            src="../../../public/images/home.svg"
            alt="icone accueil"
          />
        </Link>
      </div>
      <Card activity={randomActivity[activityIndex]} />
    </div>
  );
}

export default RandomActivity;
