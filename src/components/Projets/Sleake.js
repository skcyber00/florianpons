import React from "react";
import { Link } from "react-router-dom";

function Sleake() {
  return (
    <div class="row">
      <div class="col-md-12 margin_60 description">
        <h2 class="margin_30">
          Développement web et mobile -{" "}
          <Link to="/projets/sleake" class="link">
            Sleake
          </Link>
        </h2>
        <div class="row">
          <div class="col-md-7 description">
            <p>
              - Développement du site sleake.fr et d'un site d'administration
              interne : Front-end réalisé en Nuxt.JS (Vue.JS) - Backend en API
              Rest réalisé en PHP à l'aide du framework Slim et utilisation de
              l'ORM Eloquent de Laravel
              <br />- Développement d'une application mobile en Flutter
            </p>
          </div>
          <div class="col-md-5 jc-center">
            <span
              class="iconify"
              data-icon="uim:vuejs"
              style={{ fontSize: "7rem" }}
            ></span>
            <span
              class="iconify"
              data-icon="logos:flutter"
              style={{ fontSize: "7rem" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sleake;
