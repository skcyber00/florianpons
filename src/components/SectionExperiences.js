import React from "react";
import { Link } from "react-router-dom";
import Prettiersun from "./Projets/Prettiersun";
import Sleake from "./Projets/Sleake";
import Resavion from "./Projets/Resavion";
import Adista from "./Projets/Adista";

function SectionExperiences() {
  return (
    <section class="container-white competence margin_80">
      <div class="competence-body">
        <div class="row">
          <h1 class="margin_60_0">EXPERIENCE PROFESSIONNELLES</h1>

          <Prettiersun />

          <Sleake />

          <Resavion />

          <Adista />

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
