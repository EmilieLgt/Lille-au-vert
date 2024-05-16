import { Link } from "react-router-dom";
import Card from "../components/Card";
import Sortez from "./Sortez";
import Filter from "../components/Filter";
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import "./pages.css";

function WeekEnd() {
  const { weekEnd, countClick, filter } = useContext(ActivitiesContext);

  const weekendFiltered = filter
    ? weekEnd.filter((activity) => activity.hashtag === filter)
    : weekEnd;

  return (
    <>
      <div className="pageBlock">
        <div className="topPage">
          <h2 className="titlePage">Week-end</h2>
          <Link to="/" className="linkTo">
            <img
              className="logoAccueil"
              src="./public/images/home.svg"
              alt="icone accueil"
            />
          </Link>
        </div>
        <Filter data={weekEnd} />
          <div className="cards">
        {countClick === 10 ? (
          <Sortez />
        ) : (
          weekendFiltered.map((activity) => (
            <Card activity={activity} key={activity.id} />
          ))
        )}
        </div>
      </div>
    </>
  );
}

export default WeekEnd;
