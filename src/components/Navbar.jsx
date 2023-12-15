import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-300 mb-3">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              MY LOGO
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/coins">Coins</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
