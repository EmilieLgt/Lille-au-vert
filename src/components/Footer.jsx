import "./footer.css";

function Footer() {
  return (
    <>
    <img className="footer-banner" src="./public/images/footerbanner2.svg"/>
      <div className="footer">
        <p className="devTitle">
          Protojam <br /> Developpé en 24h
        </p>
        <img
          className="logoWCS"
          src="./public/images/LogoWildwhite.png"
          alt="logo Wild Code School"
        />
        <div className="devBlock">
          <p className="devTitle">Developeuses</p>
          <ul className="dev">
            <li><span className="icon-flower">✿</span> Audrey Baudry</li> 
            <li><span className="icon-flower">✿</span> Emilie Lingat</li> 
            <li><span className="icon-flower">✿</span> Elodie Regnier</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
