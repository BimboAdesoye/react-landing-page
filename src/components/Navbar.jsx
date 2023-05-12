import logo from "../assets/logo-bookmark.svg";
import hamburger from "../assets/icon-hamburger(1).svg";

const Navbar = () => {
  return (
    <div className="box navigation">
      <div className="brand">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="hamburger">
        <img className="burger" src={hamburger} alt="" />
      </div>
      <ul className="">
        <li>
          <a href="#">features</a>
        </li>
        <li>
          <a href="#">pricing</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <li className="btn last">
          <a href="#">login</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
