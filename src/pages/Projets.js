import React from "react";
import Layout from "../components/Layout/Layout";
import SectionProjets from "../components/SectionProjets";

class Projets extends React.Component {
  componentDidMount() {
    document.title = "Projets";
  }

  render() {
    return (
      <div>
        <Layout>
          <SectionProjets />
        </Layout>
      </div>
    );
  }
}

export default Projets;
