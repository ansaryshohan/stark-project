import React from "react";
import { Container } from "react-bootstrap";
import TopHeader from "../topHeader/TopHeader";
import SingleFeature from "./SingleFeature";

const FeaturesSection = () => {
  const featuresContent = [
    {
      id: 1,
      title: "Video messaging",
      description:
        "This software is very easy for you to manage. You can use it as you wish.",
    },
    {
      id: 2,
      title: "Keep safe & private",
      description:
        "This software is very easy for you to manage. You can use it as you wish.",
    },
    {
      id: 3,
      title: "Save your time",
      description:
        "This software is very easy for you to manage. You can use it as you wish.",
    },
  ];

  return (
    <Container className="my-5 py-5">
      <TopHeader title={"Best features for a good experience"} />
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center  mt-5 pt-5">
        {featuresContent.map((content) => (
          <SingleFeature key={content.id} content={content} />
        ))}
      </div>
    </Container>
  );
};

export default FeaturesSection;
