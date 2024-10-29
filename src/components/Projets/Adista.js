import React from "react";
import { Link } from "react-router-dom";

function Sleake() {
  return (
    <div class="row">
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
              <br />- Pratique régulière des commandes Cisco et Linux - Sécurité
              Parfeu (Fortinet / Stormshield), Vpn et routage Réseaux
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sleake;
