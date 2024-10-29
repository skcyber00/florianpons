import React from "react";
import { Link } from "react-router-dom";

function Prettiersun() {
  return (
    <div class="row">
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
              - Développement du site e-commerce prettiersun.com et d'un site
              d'administration interne : Front-end réalisé en Node.Js
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
    </div>
  );
}

export default Prettiersun;
