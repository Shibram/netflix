import React from "react";
import {
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

const Jumbotron = (props) => {
  return (
    <Item>
      <Inner direction={props.direction}>
        <Pane>
          <Title>{props.title}</Title>
          <SubTitle>{props.subTitle}</SubTitle>
        </Pane>
        <Pane>
          <Image alt={props.alt} src={props.image} />
        </Pane>
      </Inner>
    </Item>
  );
};

Jumbotron.Container = (props) => {
  return <Container>{props.children}</Container>;
};

export default Jumbotron;
