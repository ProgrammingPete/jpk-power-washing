import { Link } from 'react-scroll'
function Header() {
  return (
    <header>
      {/* <img classname="video" alt="about" src={background} /> */}
      <h1>J.P.K. Power Washing Service</h1>
      <h2>"Let J.P.K. Power Washing handle the dirty work for you!"</h2>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
            <Link to="contact" spy={true} smooth={true} duration={1000}> Contact Us For A Free Estimate </Link>
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
