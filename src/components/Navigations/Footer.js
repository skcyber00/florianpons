import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
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
          </ul>
        </div>
      </div>
      <div class="topbar">
        <div class="topbar-logo">
          <div class="logo-title">
            <a href="https://github.com/skcyber00">
              <span class="iconify" data-icon="codicon:github-alt"></span>
            </a>

            <a href="https://www.linkedin.com/in/florian-pons-3b4706206/">
              <span class="iconify" data-icon="akar-icons:linkedin-fill"></span>
            </a>
          </div>
        </div>
        <div class="topbar-nav">
          <ul>
            <li>
              <h2 class="link">
                Designé et developpé avec passion par Florian Pons. ©2022
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
