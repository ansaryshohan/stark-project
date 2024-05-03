import React from "react";
import { Container } from "react-bootstrap";
import videoImage from "../../assets/videoImage.png";
import TopHeader from "../topHeader/TopHeader";

const VideoHeroSection = () => {
  return (
    <Container>
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center my-5 py-5 gap-5">
        {/* the video image section  */}
        <div className="w-100 w-lg-50">
          <img src={videoImage} alt="" className="w-100 w-lg-75" />
        </div>
        {/* the text section here */}
        <div className="w-100 w-lg-50 d-flex flex-column gap-2">
          <TopHeader title={"Meet your customers, with live video chat"} textAlign={{textAlign:"start"}} />
          <h6>
            Proin faucibus nibh et sagittis a. Lacinia purus ac amet
            pellentesque aliquam enim.
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet
            pellentesque aliquam enim.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default VideoHeroSection;
