import React from "react";
import Layout from "../../components/Layout/Layout";
import Resavion from "../../components/Projets/Resavion";
import { Splide, SplideSlide } from "@splidejs/react-splide";

class ProjetsResavion extends React.Component {
  componentDidMount() {
    document.title = "Resavion";
  }

  render() {
    return (
      <div>
        <Layout>
          <section class="container-white competence margin_80">
            <div class="competence-body">
              <div class="row">
                <h1 class="margin_60_0">EXPERIENCE PROFESSIONNELLES</h1>
                <Resavion />
              </div>
            </div>
            <div>
              <Splide
                options={{
                  type: "loop",
                  autoWidth: true,
                }}
                aria-label="My Favorite Images"
              >
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-1.png"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-2.png"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-3.png"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-4.png"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-5.png"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-6.png"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-7.png"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-8.png"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-9.png"
                  />
                </SplideSlide>

                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/resavion/resavion-10.png"
                  />
                </SplideSlide>
              </Splide>
            </div>
          </section>
        </Layout>
      </div>
    );
  }
}

export default ProjetsResavion;
