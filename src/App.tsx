import React from "react";
import Header from "./Component/Header/header";
import Intro from "./Component/Intro/intro";
import TechStack from "./Component/TechStack/tech";
import Projects from "./Component/Project/project";
import Footer from "./Component/Footer/footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
