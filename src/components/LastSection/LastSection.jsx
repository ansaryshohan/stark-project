import React from "react";
import { Button, Container } from "react-bootstrap";
import TopHeader from "../topHeader/TopHeader";

const LastSection = () => {
  return (
    <Container className="py-5 mt-5 text-center" style={{maxWidth:"700px"}}>
      <TopHeader
        title={
          "Drop us a line or two, we are open for creative minds and collaborations!"
        }
      />
      <Button variant="primary" className="mt-4 px-4">Start Chatting Now</Button>
    </Container>
  );
};

export default LastSection;
