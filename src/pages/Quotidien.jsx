import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";

function Quotidien() {
  const {daily} = useContext(ActivitiesContext)
  
  return (
    <>
      <Link to="/">Accueil</Link>
      {daily.map((activity) =>
        <Card activity={activity} key={activity.id}/>)}
      
    </>
  );
}

export default Quotidien;
