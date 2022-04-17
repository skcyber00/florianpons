import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function SectionProjets() {
  return (
    <section class="projets">
      <div class="projets-title">
        <h2>Projets</h2>
        <div class="position-ligne-horizontal">
          <span class="ligne-horizontal"></span>
        </div>
      </div>
      <div class="projets-body">
        <Splide
          options={{
            type: "loop",
            height: "40rem",
            autoWidth: true,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img class="projets-img" src="/images/sleake.png" alt="Sleake" />
          </SplideSlide>
          <SplideSlide>
            <img
              class="projets-img"
              src="/images/resavion.png"
              alt="Resavion"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              class="projets-img"
              src="/images/prettiersun.png"
              alt="Prettiersun"
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default SectionProjets;
