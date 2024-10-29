import React from "react";
import Layout from "../../components/Layout/Layout";
import Sleake from "../../components/Projets/Sleake";
import { Splide, SplideSlide } from "@splidejs/react-splide";

class ProjetsSleake extends React.Component {
  componentDidMount() {
    document.title = "Sleake";
  }

  render() {
    return (
      <div>
        <Layout>
          <section class="container-white competence margin_80">
            <div class="competence-body">
              <div class="row">
                <h1 class="margin_60_0">EXPERIENCE PROFESSIONNELLES</h1>
                <Sleake />
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
                  <img class="projets-img" src="/images/sleake/sleake-1.png" />
                </SplideSlide>
                <SplideSlide>
                  <img class="projets-img" src="/images/sleake/sleake-2.png" />
                </SplideSlide>
                <SplideSlide>
                  <img class="projets-img" src="/images/sleake/sleake-3.png" />
                </SplideSlide>
                <SplideSlide>
                  <img class="projets-img" src="/images/sleake/sleake-4.png" />
                </SplideSlide>
                <SplideSlide>
                  <img class="projets-img" src="/images/sleake/sleake-5.png" />
                </SplideSlide>
                <SplideSlide>
                  <img class="projets-img" src="/images/sleake/sleake-6.png" />
                </SplideSlide>
                <SplideSlide>
                  <img class="projets-img" src="/images/sleake/sleake-7.png" />
                </SplideSlide>
                <SplideSlide>
                  <img class="projets-img" src="/images/sleake/sleake-8.png" />
                </SplideSlide>
                <SplideSlide>
                  <img class="projets-img" src="/images/sleake/sleake-9.png" />
                </SplideSlide>

                <SplideSlide>
                  <img class="projets-img" src="/images/sleake/sleake-10.png" />
                </SplideSlide>
              </Splide>
            </div>
          </section>
        </Layout>
      </div>
    );
  }
}

export default ProjetsSleake;
