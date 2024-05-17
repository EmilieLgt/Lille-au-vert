import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (<>
    <Link to ="/"> <img className="img-banner" src="./public/images//HomePage/lilleauvert2.svg"/> </Link>
    <img className="img-banner-mobile" src="./public/images//HomePage/lilleauvertmobile.svg"></img>

    </>
  );
}

export default Header;
