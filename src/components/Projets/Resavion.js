import React from "react";
import { Link } from "react-router-dom";

function Sleake() {
  return (
    <div class="row">
      <div class="col-md-12 margin_60 description">
        <h2 class="margin_30">Développement web - Resavion</h2>
        <div class="row">
          <div class="col-md-7 description">
            <p>
              {/* - Développement du site resavion.fr et d'un site d'administration
              interne : réalisés en PHP à l'aide du framework Slim et de Twig
              <br />- Utilisation de l'ORM Eloquent de Laravel
              <br />- Création d'une API Rest en PHP */}
              <small>sept. 2019 - déc. 2020 · 1 an 4 mois</small>
              <br />
              <br />
              ℹ️ Développement du site resavion.fr et d'un site d'administration
              interne : réalisés en PHP à l'aide du framework Slim et de Twig.
              <br />
              ⚪ Utilisation de l'ORM Eloquent de Laravel.
              <br />
              ⚪ Création d'une API Rest en PHP.
              <br />
              <br />
              -Création de l'authentification (Google et local).
              <br /> - Page de checkout.
              <br />
              - Création, suppression modification des pages via
              l'administration interne.
              <br />
              <br />
              ℹ️ Mise en place de l'hébergement OVh.
              <br />
              <br />
              <b>Compétences :</b> Frameworks PHP · Twig · SEO · PHP · MySQL ·
              PhpMyAdmin · Stripe
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
