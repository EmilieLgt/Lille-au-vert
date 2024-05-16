import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Link to="/">Accueil</Link>
      <Link to="/uneHeure">Une heure</Link>
      <Link to="/demiJournee">Demi Journée</Link>
      <Link to="/weekend">Week-end</Link>
      <Link to="/quotidien">Au quotidien</Link>
    </>
  );
}

export default HomePage;
