import React from "react";
import { Link } from "react-router-dom";

function Sleake() {
  return (
    <div class="row">
      <div class="col-md-12 margin_60 description">
        <h2 class="margin_30">Développement web et mobile - Sleake</h2>
        <div class="row">
          <div class="col-md-7 description">
            <p>
              {/* - Développement du site sleake.fr et d'un site d'administration
              interne : Front-end réalisé en Nuxt.JS (Vue.JS) - Backend en API
              Rest réalisé en PHP à l'aide du framework Slim et utilisation de
              l'ORM Eloquent de Laravel
              <br />- Développement d'une application mobile en Flutter */}
              <small>déc. 2020 - 2022 · 1 an 2 mois</small>
              <br />
              <br />
              ℹ️ Développement du site sleake.fr et d'un site d'administration
              interne : Front-end réalisé en Nuxt.JS (Vue.JS) Backend en API
              Rest réalisé en PHP à l'aide du framework Slim et utilisation de
              l'ORM Eloquent de Laravel.
              <br />
              <br />
              ℹ️ Développement d'une application mobile en FLUTTER.
              <br />
              <br />
              - Création de l'authentification (local).
              <br />
              - Création, suppression modification des pages via
              l'administration interne.
              <br />
              <br />
              ℹ️ Mise en place de l'hébergement OVh.
              <br />
              <br />
              <b>Compétences :</b> Dart · Optimisation pour les moteurs de
              recherche (SEO) · Nuxt.js · API REST · Frameworks PHP · SEO · PHP
              · MySQL · Flutter
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
