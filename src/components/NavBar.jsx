import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <NavLink to="/posts">
        All posts
      </NavLink>
      <NavLink to="/profle" >
        Add profiles
      </NavLink>
      <NavLink to ="/login">
        Go to login
      </NavLink>
      <NavLink to="/register">
        Go to register
      </NavLink>
    </div>
  );
}
