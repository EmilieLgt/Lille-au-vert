import { Link } from "react-router-dom";
import Card from "../components/Card";
import Sortez from "./Sortez";
import Filter from "../components/Filter";
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import "./pages.css";

function UneHeure() {
  const { oneHour, countClick, filter } = useContext(ActivitiesContext);

  const oneHourFiltered = filter
    ? oneHour.filter((activity) => activity.hashtag === filter)
    : oneHour;

  return (
    <>
      <div className="pageBlock">
        <div className="topPage">
          <h2 className="titlePage">Une heure</h2>
          <Link to="/" className="linkTo">
            <img
              className="logoAccueil"
              src="../../../public/images/home.svg"
              alt="icone accueil"
            />
          </Link>
        </div>
        <Filter data={oneHour} />
        <div className="cards">
          {countClick === 6 ? (
            <Sortez />
          ) : (
            oneHourFiltered.map((activity) => (
              <Card activity={activity} key={activity.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default UneHeure;
