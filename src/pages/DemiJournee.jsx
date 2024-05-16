import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import "./pages.css";

function DemiJournee() {
  const { oneAfternoon } = useContext(ActivitiesContext);

  return (
    <>
      <div className="pageBlock">
        <div className="topPage">
          <h2 className="titlePage">Demi-journée</h2>
          <Link to="/" className="linkTo">
            <img
              className="logoAccueil"
              src="./public/images/home.svg"
              alt="icone accueil"
            />
          </Link>
        </div>
        <div className="cards">
          {oneAfternoon.map((activity) => (
            <Card activity={activity} key={activity.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DemiJournee;
