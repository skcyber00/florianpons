import React from "react";
import "../assets/css/components/contact.scss";

function SectionContact() {
  return (
    <section class="contact" id="contact">
      <div class="contact-title">
        <h2>Contact</h2>
      </div>
      <div class="contact-body">
        <form class="form-container">
          <div class="row">
            <div class="col-md-6 add_bottom_45">
              <div class="form-group">
                <label>Votre nom</label>
                <input
                  type="text"
                  class="form-input"
                  placeholder="Entrez votre nom"
                ></input>
              </div>
            </div>
            <div class="col-md-6 add_bottom_45">
              <div class="form-group">
                <label>Adresse e-mail</label>
                <input
                  type="text"
                  class="form-input"
                  placeholder="Entrez votre adresse email"
                ></input>
              </div>
            </div>
            <div class="col-md-12 add_bottom_20">
              <div class="form-group">
                <label>Votre messsage</label>
                <input
                  type="text"
                  class="form-input"
                  placeholder="Bonjour, j’aimerai m’entretenir avec vous pour un projet"
                ></input>
              </div>
            </div>
            <div class="col-md-3 mr-auto ml-auto add_top_60">
              <input type="submit" value="Envoyer" class="form-btn"></input>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SectionContact;
