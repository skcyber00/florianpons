import React from "react";
import Layout from "../components/Layout/Layout";
import HeaderIntro from "../components/HeaderIntro";
import SectionCompetences from "../components/SectionCompetences";
import SectionProjets from "../components/SectionProjets";
import SectionContact from "../components/SectionContact";

function Home() {
  return (
    <div>
      <Layout>
        <HeaderIntro />
        <SectionCompetences />
        <SectionProjets />
        <SectionContact />
      </Layout>
    </div>
  );
}

export default Home;