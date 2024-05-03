import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import ThreeImage from "./ThreeImage";
import CustomerCount from "./CustomerCount";
import CustomerRating from "./CustomerRating";

const HeroText = () => {
  return (
    <div className="heroText">
      <div className="d-flex flex-column gap-2">
        <h1 className="fSize-60">
          The most flexible <br /> chatting app you <br />
          will ever use.
        </h1>
        <p className="fs-5">
          Great software that allows you to chat from any place at any time
          without any interruption.
        </p>
        <div>
          <Button>
            Start Chatting Now{" "}
            <span>
              <FaArrowRight />
            </span>
          </Button>
        </div>
      </div>
      {/* the image and rating section here */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-5 pt-3 gap-3">
        <ThreeImage/>
        <CustomerCount/>
        <CustomerRating/>
      </div>
    </div>
  );
};

export default HeroText;
