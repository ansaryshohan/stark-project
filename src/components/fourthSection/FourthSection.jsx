import React from "react";
import { Button, Container } from "react-bootstrap";
import messageImg from "../../assets/hero2.png";
import TopHeader from "../topHeader/TopHeader";

const FourthSection = () => {
  return (
    <Container className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center gap-3 py-5 ">
      {/*text of the sections  */}
      <div className="w-100 w-lg-50 d-flex flex-column gap-3">
        <TopHeader
          title={"Never miss any chat"}
          textAlign={{ textAlign: "start" }}
        />
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered all injected humour or randomised words
          which don't look even slightly believable.{" "}
        </p>
        <div>
          {" "}
          <Button variant="primary">Start Chatting Now</Button>
        </div>
      </div>
      {/* image section  */}
      <div className="w-100 w-lg-50">
        <img src={messageImg} alt="" className="w-100 w-lg-75" />
      </div>
    </Container>
  );
};

export default FourthSection;
