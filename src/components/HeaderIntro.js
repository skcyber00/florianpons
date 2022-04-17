import React from "react";
import "../assets/css/components/intro.scss";

function HeaderIntro() {
  return (
    <header class="intro">
      <div class="intro-container">
        <div class="intro-color">
          <span class="color1"></span>
          <span class="color2"></span>
          <span class="color3"></span>
        </div>
        <div class="intro-body">
          <h1>Bonjour ! Moi c’est Florian, je suis developpeur web.</h1>
          <div class="intro-footer">
            <span>Back-End</span>
          </div>
          <div class="intro-footer">
            <span>Front-End</span> <span>//</span> <span>Full Stack</span>
            <div class="ligne-horizotal"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderIntro;
