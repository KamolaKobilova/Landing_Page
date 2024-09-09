import React from "react";
import Header from "./Component/Header/header";
import Intro from "./Component/Intro/intro";
import TechStack from "./Component/TechStack/tech";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <TechStack />
    </>
  );
};

export default App;
