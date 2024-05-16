import { Link } from "react-router-dom";
import { useContext } from "react";
import Card from "../components/Card";
import Sortez from "./Sortez";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import "./pages.css";

function DemiJournee() {
  const { oneAfternoon, countClick } = useContext(ActivitiesContext);

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
        {countClick === 10 ? (
          <Sortez />
        ) : (
          oneAfternoon.map((activity) => (
            <Card activity={activity} key={activity.id} />
          ))
        )}
      </div>
    </>
  );
}

export default DemiJournee;
