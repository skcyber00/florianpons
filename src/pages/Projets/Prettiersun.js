import React from "react";
import Layout from "../../components/Layout/Layout";
import Prettiersun from "../../components/Projets/Prettiersun";
import { Splide, SplideSlide } from "@splidejs/react-splide";

class Projetsprettiersun extends React.Component {
  componentDidMount() {
    document.title = "Prettiersun";
  }

  render() {
    return (
      <div>
        <Layout>
          <section class="container-white competence margin_80">
            <div class="competence-body">
              <div class="row">
                <h1 class="margin_60_0">EXPERIENCE PROFESSIONNELLES</h1>
                <Prettiersun />
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
                    src="/images/prettiersun/prettiersun-1.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-2.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-3.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-4.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-5.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-6.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-7.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-8.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-9.png"
                    alt="prettiersun"
                  />
                </SplideSlide>

                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-10.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-11.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-12.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-13.png"
                    alt="prettiersun"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    class="projets-img"
                    src="/images/prettiersun/prettiersun-14.png"
                    alt="prettiersun"
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

export default Projetsprettiersun;
