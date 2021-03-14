import React from "react";
import { Accordian } from "../components";
import data from "../fixtures/faqs";

const FaqContainer = (props) => {
  const accords = data.map((item) => <Accordian key={item.id} {...item} />);
  return <Accordian.Container>{accords}</Accordian.Container>;
};

export default FaqContainer;
