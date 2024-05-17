import "./header.css";
import { Link } from "react-router-dom";
import yourSVGDesktop from "../../public/images/HomePage/lilleauvert2.svg";
import yourSVGMobile from "../../public/images/HomePage/lilleauvertmobile.svg";

function Header() {
  return (
    <>
      <Link to="/">
        {" "}
        <img className="img-banner" src={yourSVGDesktop} />{" "}
      </Link>
      <img className="img-banner-mobile" src={yourSVGMobile}></img>
    </>
  );
}

export default Header;
