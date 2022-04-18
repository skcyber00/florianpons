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
          <SectionCompetences />
        </Layout>
      </div>
    );
  }
}

export default Competences;
