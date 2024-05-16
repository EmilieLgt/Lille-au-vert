import "./footer.css";

function Footer() {
  return (
    <>
    <img className="footer-banner"src="../../public/images/HomePage/footerbanner2.svg"/>
      <div className="footer">
        <p className="devTitle">
          Protojam <br /> Developpé en 24h
        </p>
        <img
          className="logoWCS"
          src="./public/images/WCSlogo.png"
          alt="logo Wild Code School"
        />
        <div className="devBlock">
          <p className="devTitle">Developeuses</p>
          <p className="dev">
            Emilie Lingat <br />
            Audrey Baudry <br />
            Elodie Regnier
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
