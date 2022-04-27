import React from "react";
import Layout from "../components/Layout/Layout";
import SectionApropos from "../components/SectionApropos";

class Apropos extends React.Component {
  componentDidMount() {
    document.title = "Apropos";
  }

  render() {
    return (
      <div>
        <Layout>
          <SectionApropos />
        </Layout>
      </div>
    );
  }
}

export default Apropos;
