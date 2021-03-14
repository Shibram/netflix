import React from "react";
import FaqContainer from "./containers/faqs";
import FooterContainer from "./containers/footer";
import JumbotronContainer from "./containers/jumbotron";

const App = () => {
  return (
    <>
      <FaqContainer />
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
};

export default App;
