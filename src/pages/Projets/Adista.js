import React from "react";
import Layout from "../../components/Layout/Layout";
import Adista from "../../components/Projets/Adista";

class ProjetsAdista extends React.Component {
  componentDidMount() {
    document.title = "Projets";
  }

  render() {
    return (
      <div>
        <Layout>
          <section class="container-white competence margin_80">
            <div class="competence-body">
              <div class="row">
                <h1 class="margin_60_0">EXPERIENCE PROFESSIONNELLES</h1>
                <Adista />
              </div>
            </div>
          </section>
        </Layout>
      </div>
    );
  }
}

export default ProjetsAdista;
