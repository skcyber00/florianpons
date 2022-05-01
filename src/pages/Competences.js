import React from "react";
import Layout from "../components/Layout/Layout";
import SectionCompetences from "../components/SectionCompetences";

class Competences extends React.Component {
  componentDidMount() {
    document.title = "Competences";
  }

  render() {
    return (
      <div>
        <Layout>
          <section class="container-white competence margin_80 add_bottom_105">
            <div class="competence-body">
              <div class="row description">
                <div class="col-md-12 margin_60">
                  <div class="row">
                    <div class="col-md-6 jc-center">
                      <span
                        class="iconify"
                        data-icon="logos:nodejs"
                        style={{ fontSize: "15rem" }}
                      ></span>
                    </div>
                    <div class="col-md-6">
                      <p>
                        J'ai pu au cours de mes expériences concevoir un site
                        e-commerce. Par exemple la conception du panier, l'ajout
                        du module de paiement avec Stripe, l'authentification et
                        bien plus encore. Le site est conçu en NodeJs et utilise
                        le framework ExpressJs, de nombreuses pages dispose
                        également de Javascript et Front-End.
                      </p>
                      <br />
                      <p>
                        Pour l'hébergement du site, j'ai opté pour un serveur
                        VPS chez OVH, utilisant un serveur NGINX.
                      </p>
                      <br />
                      <p>
                        <b>Certification</b> Nodejs en cours chez Dyma.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 margin_60">
                  <div class="row">
                    <div class="col-md-6">
                      <p>
                        Ah le framework Vuejs est une grande histoire. Celui-ci
                        a été utilisé pour l'implémentation d'un réseau social,
                        afin de bénéficié d'un SEO GOOGLE performant, le site a
                        été migré par mes soin en SSR utilisant le framework
                        NuxtJs. Le site a été complétement réaliser via des
                        requête API Rest vers un serveur Back-End conçu en PHP.
                      </p>
                      <br />
                      <p>
                        L'hébergement du site se trouve, sur un serveur VPS chez
                        l'hébergeur OVH.
                      </p>
                      <br />
                      <p>
                        <b>Certification</b> NuxtJs acquise chez Udemy.
                      </p>
                    </div>
                    <div class="col-md-6 jc-center">
                      <span
                        class="iconify"
                        data-icon="uim:vuejs"
                        style={{ fontSize: "15rem" }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 margin_60">
                  <div class="row">
                    <div class="col-md-6 jc-center">
                      <span
                        class="iconify"
                        data-icon="vscode-icons:file-type-reactjs"
                        style={{ fontSize: "15rem" }}
                      ></span>
                    </div>
                    <div class="col-md-6">
                      <p>
                        ReatJs et React Native. Commençons par ReactJs, se
                        framework a été choisi pour la conception du site
                        actuel, mon portfolio.
                      </p>
                      <br />
                      <p>L'hébergement de mon site, se trouve chez Netlify</p>
                      <br />
                      <p>
                        React Navite, se langage Natif a été utilisé pour la
                        conception de l'application du site réalisé en Vuejs.
                      </p>
                      <br />
                      <p>
                        <b>Certification</b> React Native acquise et ReactJs en
                        cours chez Udemy.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 margin_60">
                  <div class="row">
                    <div class="col-md-6">
                      <p>
                        PHP a été utilisé pour la conception de divers site tel
                        que Résavion et bien d'autres, ce langage a été utilisé
                        également pour la conception d'API Rest. Souvent conçu à
                        l'aide de l'ORM Eloquent de Laravel.
                      </p>
                      <br />
                      <p>
                        L'hébergement courrant se trouve, chez Ovh sur des
                        serveurs de type mutualisé.
                      </p>
                    </div>
                    <div class="col-md-6 jc-center">
                      <span
                        class="iconify"
                        data-icon="logos:php"
                        style={{ fontSize: "15rem" }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 margin_60">
                  <div class="row">
                    <div class="col-md-6 jc-center">
                      <span
                        class="iconify"
                        data-icon="logos:flutter"
                        style={{ fontSize: "15rem" }}
                      ></span>
                    </div>
                    <div class="col-md-6">
                      <p>
                        Flutter, le framework a été utilisé pour concevoir
                        l'application mobile de Sleake, les données sont via des
                        requêtes API au serveur Backend.
                      </p>
                      <br />
                      <p>
                        <b>Certification</b> Flutter acquise chez Dyma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <SectionCompetences />
        </Layout>
      </div>
    );
  }
}

export default Competences;
