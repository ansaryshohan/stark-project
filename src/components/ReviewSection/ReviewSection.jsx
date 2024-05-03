import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import reviewer1 from "../../assets/portfolio1.png";
import reviewer2 from "../../assets/portfolio2.png";
import TopHeader from "../topHeader/TopHeader";

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    cssEase: "linear",
    // pauseOnHover: true
  };
  return (
    <div style={{ backgroundColor: "#2563EB" ,marginBottom:"30px"}} >
      <Container className="py-5 ">
        <TopHeader
          title={"What our customer are saying "}
          textAlign={{ textAlign: "center", color: "white" }}
        />
        <div
          className="slider-container"
          style={{ color: "white", marginTop: "20px" }}
        >
          <Slider {...settings}>
            {/* ====first slide starts */}
            <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
              <div className="w-75 w-md-50">
                <h4>
                  The best UI Kit for developers. So easy to implement and
                  publish.
                </h4>
                <p>
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change.”
                </p>
                <div className="d-flex gap-4">
                  <div className="portfolio-image border-0">
                    <img src={reviewer1} alt="" className="w-100 " />
                  </div>
                  <div>
                    <h5>Theresa Webb</h5>
                    <p>Medical Assistant</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ====first slide ends==== */}
            {/* ===second slide starts===== */}
            <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
              <div className="w-75 w-md-50">
                <h4>Rareblocks helps you optimize for engagement.</h4>
                <p>
                  “Must have tools for developers, who want to be Product
                  Designer, UX Designer, or Interaction Designer.”
                </p>
                <div className="d-flex gap-4">
                  <div className="portfolio-image border-0">
                    <img src={reviewer2} alt="" className="w-100" />
                  </div>
                  <div>
                    <h5>Dianne Russell</h5>
                    <p>Marketing Coordinator</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ====second slide ends===== */}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ReviewSection;
