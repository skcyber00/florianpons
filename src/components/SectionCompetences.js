import React from "react";
import { Link } from "react-router-dom";

function SectionCompetences() {
  return (
    <section class="container-white competence margin_130">
      <div class="competence-body">
        <div class="row">
          <div class="col-md-7">
            <div class="description">
              <h2 class="add_bottom_45">
                Faire de chaque idée un projet <span>ambitieux</span>
              </h2>
              <p>
                J'ai littéralement 20 secondes pour vous donner envie de lire la
                suite. La pression. Du coup, je vais aller droit au but. Aussi,
                longtemps, que je m'en souvienne j'ai toujours été passionné par
                le web : du réseau en passant par le développement.
              </p>
              <br />
              <p>
                Autodidacte et ayant la soif d'apprendre, je compte plus les
                heures passées et que je passe encore aujourd'hui devant mon Pc
                à me former sur les dernières technologies du web.
              </p>
              <br />
              <p>
                Cela m'a permis de pouvoir décrocher et développer des projets
                d'envergure, et tout cela en dehors de mon job en réseau, un
                vrai bosseur direz-vous ? Oui et non, plutôt un bosseur
                passionné. Comment ça ?
                <Link to="/apropos" class="to_black">
                  Ça continue
                  <span
                    class="iconify icon"
                    data-icon="bi:arrow-right-square-fill"
                  ></span>
                </Link>
              </p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="list">
              <span>API Rest</span>
              <span>CSS</span>
              <span>Dart</span>
              <span>Ejs</span>
              <span>Figma</span>
              <span>Flutter</span>
              <span>HTML</span>
              <span>Javascript</span>
              <span>Git</span>
              <span>Laravel</span>
              <span>MongoDB</span>
              <span>NodeJs</span>
              <span>NuxtJs</span>
              <span>PHP</span>
              <span>ReactJs</span>
              <span>ReactNative</span>
              <span>SASS</span>
              <span>Sequelize</span>
              <span>Slim</span>
              <span>SQL</span>
              <span>Vuejs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionCompetences;
