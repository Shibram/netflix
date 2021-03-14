import React, { useState } from "react";
import {
  Body,
  Container,
  Frame,
  Header,
  Inner,
  Item,
  Title,
} from "./styles/accordian";

const Accordian = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleBody = () => {
    setToggle(!toggle);
  };

  const body = toggle ? <Body>{props.body}</Body> : null;
  const icon = toggle ? (
    <img src="/images/icons/close-slim.png" alt="close" />
  ) : (
    <img src="/images/icons/add.png" alt="open" />
  );

  return (
    <Item>
      <Header onClick={toggleBody}>
        {props.header}
        {icon}
      </Header>
      {body}
    </Item>
  );
};

Accordian.Container = (props) => {
  return (
    <Container>
      <Frame>
        <Inner>
          <Title>Frequently Asked Questions</Title>
        </Inner>
        {props.children}
      </Frame>
    </Container>
  );
};

export default Accordian;
