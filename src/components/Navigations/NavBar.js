import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="topbar">
      <div class="topbar-logo">
        <div class="logo-title">
          <Link to="/">Florian.</Link>
        </div>
      </div>
      <div class="topbar-nav">
        <ul>
          <li>
            <Link to="/apropos" class="link">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/competences" class="link">
              Compétences
            </Link>
          </li>
          <li>
            <Link to="/projets" class="link">
              Projets
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
