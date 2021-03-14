import React from "react";
import { Jumbotron } from "../components";
import jumboData from "../fixtures/jumbo";

const JumbotronContainer = () => {
  const data = jumboData.map((item) => <Jumbotron key={item.id} {...item} />);
  return <Jumbotron.Container>{data}</Jumbotron.Container>;
};

export default JumbotronContainer;
