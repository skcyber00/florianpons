import React from "react";
import Layout from "../components/Layout/Layout";
import SectionCompetences from "../components/SectionCompetences";

class Competences extends React.Component {
  componentDidMount() {
    document.title = "Competences";
  }

  render() {
    return (
      <div>
        <Layout>
          <section class="container-white competence margin_80 add_bottom_105">
            <div class="competence-body">
              <div class="row description">
                <div class="col-md-12 margin_60">
                  <div class="row">
                    <div class="col-md-6 jc-center">
                      <span
                        class="iconify"
                        data-icon="logos:nodejs"
                        style={{ fontSize: "15rem" }}
                      ></span>
                    </div>
                    <div class="col-md-6">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sapiente velit delectus recusandae soluta numquam
                        veniam dolorem in natus repellat expedita corrupti illum
                        aspernatur culpa illo, quia corporis eveniet libero
                        ullam!
                      </p>
                      <br />
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sapiente velit delectus recusandae soluta in
                        ullam!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 margin_60">
                  <div class="row">
                    <div class="col-md-6">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sapiente velit delectus recusandae soluta numquam
                        veniam dolorem in natus repellat expedita corrupti illum
                        aspernatur culpa illo, quia corporis eveniet libero
                        ullam!
                      </p>
                      <br />
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sapiente velit delectus recusandae soluta in
                        ullam!
                      </p>
                    </div>
                    <div class="col-md-6 jc-center">
                      <span
                        class="iconify"
                        data-icon="uim:vuejs"
                        style={{ fontSize: "15rem" }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 margin_60">
                  <div class="row">
                    <div class="col-md-6 jc-center">
                      <span
                        class="iconify"
                        data-icon="vscode-icons:file-type-reactjs"
                        style={{ fontSize: "15rem" }}
                      ></span>
                    </div>
                    <div class="col-md-6">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sapiente velit delectus recusandae soluta numquam
                        veniam dolorem in natus repellat expedita corrupti illum
                        aspernatur culpa illo, quia corporis eveniet libero
                        ullam!
                      </p>
                      <br />
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sapiente velit delectus recusandae soluta in
                        ullam!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <SectionCompetences />
        </Layout>
      </div>
    );
  }
}

export default Competences;
