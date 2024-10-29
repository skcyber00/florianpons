import React from "react";
import { Link } from "react-router-dom";

function SectionExperiences() {
  return (
    <section class="container-white competence margin_80">
      <div class="competence-body">
        <div class="row">
          <h1 class="margin_60_0">EXPERIENCE PROFESSIONNELLES</h1>

          <div class="col-md-12 margin_60 description">
            <h2 class="margin_30">
              Développement web e-commerce -{" "}
              <Link to="/projets/prettiersun" class="link">
                prettiersun
              </Link>
              .
            </h2>
            <div class="row">
              <div class="col-md-7 description">
                <p>
                  - Développement du site e-commerce prettiersun.com et d'un
                  site d'administration interne : Front-end réalisé en Node.Js
                  (Express.Js / EJS) et utilisation de l'ODM MongoDB
                  <br />- Utilisation API Stripe / Paypal / Google auth
                </p>
              </div>
              <div class="col-md-5 jc-center">
                <div class="row">
                  <div class="col-md-12 jc-center">
                    <span
                      class="iconify"
                      data-icon="logos:nodejs"
                      style={{ fontSize: "7.8rem" }}
                    ></span>
                  </div>
                  <div class="col-md-12 jc-center">
                    <span
                      class="iconify"
                      data-icon="logos:mongodb"
                      style={{ fontSize: "4.9rem" }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                  - Développement du site sleake.fr et d'un site
                  d'administration interne : Front-end réalisé en Nuxt.JS
                  (Vue.JS) - Backend en API Rest réalisé en PHP à l'aide du
                  framework Slim et utilisation de l'ORM Eloquent de Laravel
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
                  - Développement du site resavion.fr et d'un site
                  d'administration interne : réalisés en PHP à l'aide du
                  framework Slim et de Twig
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

          <div class="col-md-12 margin_60 description">
            <div class="row">
              <div class="col-md-7 description">
                <h2 class="margin_30">
                  Technicien IT -{" "}
                  <Link to="/projets/adista" class="link">
                    Adista
                  </Link>{" "}
                  - Nancy
                </h2>
                <p>
                  - Résolution rapide des incidents clients
                  <br />- Pratique régulière des commandes Cisco et Linux -
                  Sécurité Parfeu (Fortinet / Stormshield), Vpn et routage
                  Réseaux
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-12 margin_60 description">
            <h2 class="margin_30">
              Stages informatique Mairie du Blanc-Mesnil et Lycée
              Professionnelle Ligier Richier (Réseau et développement)
            </h2>
            <div class="row">
              <div class="col-md-7 description">
                <p>
                  -Installation de serveurs supervision Centreon, avec
                  notification par mail et création de bases de données avec
                  formulaire.
                  <br />- Modification et développement du site internet.
                  (Wordpress)
                  <br />- Déploiement de serveurs ManageEngine DeskPlus et
                  Kwartz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionExperiences;
