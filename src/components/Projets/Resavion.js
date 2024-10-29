import React from "react";
import { Link } from "react-router-dom";

function Sleake() {
  return (
    <div class="row">
      <div class="col-md-12 margin_60 description">
        <h2 class="margin_30">
          Développement web -{" "}
          <Link to="/projets/resavion" class="link">
            Resavion
          </Link>
        </h2>
        <div class="row">
          <div class="col-md-7 description">
            <p>
              - Développement du site resavion.fr et d'un site d'administration
              interne : réalisés en PHP à l'aide du framework Slim et de Twig
              <br />- Utilisation de l'ORM Eloquent de Laravel
              <br />- Création d'une API Rest en PHP
            </p>
          </div>
          <div class="col-md-5 jc-center">
            <span
              class="iconify"
              data-icon="logos:php"
              style={{ fontSize: "7rem" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sleake;
