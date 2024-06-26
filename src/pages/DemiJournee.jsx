import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Sortez from "./Sortez";
import Filter from "../components/Filter";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import "./pages.css";

function DemiJournee() {
  const { oneAfternoon, countClick, filter } = useContext(ActivitiesContext);

  const oneAfternoonFiltered = filter
    ? oneAfternoon.filter((activity) => activity.hashtag === filter)
    : oneAfternoon;

  return (
    <div className="pageBlock">
      <div className="topPage">
        <h2 className="titlePage">Demi-journée</h2>
        <Link to="/" className="linkTo">
          <img
            className="logoAccueil"
            src="../../../images/home.svg"
            alt="icone accueil"
          />
        </Link>
      </div>
      <Filter data={oneAfternoon} />

      <div className="cards">
        {countClick === 6 ? (
          <Sortez />
        ) : (
          oneAfternoonFiltered.map((activity) => (
            <Card activity={activity} key={activity.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default DemiJournee;
