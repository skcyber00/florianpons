import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../assets/css/components/projets.scss";

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
            <img class="projets-img" src="/images/sleake.png" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img class="projets-img" src="/images/resavion.png" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img
              class="projets-img"
              src="/images/prettiersun.png"
              alt="Image 3"
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default SectionProjets;
