import React from "react";

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
            <span>Front-End</span> <span>&#47;&#47;</span>
            <span>Full Stack</span>
            <div class="ligne-horizotal"></div>
          </div>
        </div>
      </div>
      <div class="balise-container">
        <span>&lt;body&gt;</span>
        <span>&lt;p&gt;</span>
        <span>&lt;&#47;p&gt;</span>
        <span>&lt;&#47;body&gt;</span>
      </div>
    </header>
  );
}

export default HeaderIntro;
