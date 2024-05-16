import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";

function UneHeure() {
  const {oneHour} = useContext(ActivitiesContext)
  
  return (
    <>
      <Link to="/">Accueil</Link>
      {oneHour.map((activity) =>
        <Card activity={activity} key={activity.id}/>)}
      
    </>
  );
}
export default UneHeure;
