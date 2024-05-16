import { Link } from "react-router-dom";
import Card from "../components/Card";
import Sortez from "./Sortez";
import Filter from "../components/Filter";
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import "./pages.css";

function Quotidien() {
  const { daily, countClick, filter } = useContext(ActivitiesContext);

  const dailyFiltered = filter
    ? daily.filter((activity) => activity.hashtag === filter)
    : daily;

  return (
    <>
      <div className="pageBlock">
        <div className="topPage">
          <h2 className="titlePage">Au Quotidien</h2>
          <Link to="/" className="linkTo">
            <img
              className="logoAccueil"
              src="./public/images/home.svg"
              alt="icone accueil"
            />
          </Link>
        </div>
        <Filter data={daily} />
          <div className="cards">
        {countClick === 10 ? (
          <Sortez />
        ) : (
          dailyFiltered.map((activity) => (
            <Card activity={activity} key={activity.id} />
          ))
        )}
        </div>
      </div>
    </>
  );
}

export default Quotidien;
