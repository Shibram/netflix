import React from "react";

import {
  Break,
  Column,
  Container,
  Link,
  Row,
  Text,
  Title,
} from "./styles/footer";

const Footer = (props) => {
  return (
    <Container>
      <Title>Questions? Contact us.</Title>
      <Break />
      <Row>
        <Column>
          <Link href="#">FAQ</Link>
          <Link href="#">Investor Relations</Link>
          <Link href="#">Way to Watch</Link>
          <Link href="#">Corporate Information</Link>
          <Link href="#">Netflix Originals</Link>
        </Column>

        <Column>
          <Link href="#">Help Centre</Link>
          <Link href="#">Jobs</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Contact Us</Link>
        </Column>

        <Column>
          <Link href="#">Account</Link>
          <Link href="#">Redeem Gift Card</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Speed test</Link>
        </Column>

        <Column>
          <Link href="#">Media Center</Link>
          <Link href="#">Buy Gift Card</Link>
          <Link href="#">Cookie Preferences</Link>
          <Link href="#">Legal Notices</Link>
        </Column>
      </Row>
      <Text>Netflix India</Text>
    </Container>
  );
};

export default Footer;
