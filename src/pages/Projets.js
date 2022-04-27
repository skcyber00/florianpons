import React from "react";
import Layout from "../components/Layout/Layout";
import SectionProjets from "../components/SectionProjets";
import SectionExperiences from "../components/SectionExperiences";

class Projets extends React.Component {
  componentDidMount() {
    document.title = "Projets";
  }

  render() {
    return (
      <div>
        <Layout>
          <SectionExperiences />
          <SectionProjets />
        </Layout>
      </div>
    );
  }
}

export default Projets;
