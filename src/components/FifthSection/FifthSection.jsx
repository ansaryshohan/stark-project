import React from "react";
import { Container } from "react-bootstrap";
import messageImg from "../../assets/Frame2.png";
import TopHeader from "../topHeader/TopHeader";

const FifthSection = () => {
  return (
    <Container className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3 pb-5 ">
      {/* image section  */}
      <div className="w-100 w-lg-50">
        <img src={messageImg} alt="" className="w-100 w-lg-75" />
      </div>
      {/*text of the sections  */}
      <div className="w-100 w-lg-50 d-flex flex-column gap-3">
        <TopHeader
          title={`Get direct orders   from your customers`}
          textAlign={{ textAlign: "start" }}
        />
        <p>
          Create custom landing pages with Rareblocks that converts more
          visitors than any website. With lots of unique blocks easily build a
          page. There are many variations of passages of available.{" "}
        </p>
        <div className="d-flex align-items-start align-items-sm-center gap-5 flex-column flex-sm-row">
          <div className="d-flex justify-content-between align-items-center gap-4 me-5">
            <h4 style={{fontSize:"28px",fontWeight:"700"}}>12K+</h4>
            <p>
              Project <br/> Created
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-4">
            <h4 style={{fontSize:"28px",fontWeight:"700"}}>1947</h4>
            <p>
            Agencies <br/> Joined
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FifthSection;
