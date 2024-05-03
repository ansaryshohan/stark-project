import React from "react";
import vectorIconTriangle from "../../assets/Vector.png";
import vectorIconVideo from "../../assets/Vector1.png";
import vectorIconClock from "../../assets/Vector2.png";

const SingleFeature = ({ content: { id, title, description } }) => {
  const selectIcon = () => {
    if (id === 1) {
      return <img src={vectorIconVideo} alt=""/>;
    } else if (id === 2) {
      return <img src={vectorIconTriangle} alt="" />;
    } else {
      return <img src={vectorIconClock} alt="" />;
    }
  };

  const icon = selectIcon();

  return (
    <div className="d-flex justify-content-between align-items-start gap-2  mb-4" style={{maxWidth: "400px"}}>
      {/* icon part */}
      <div
        className="iconDiv d-flex justify-content-center align-items-center"
        style={
          id === 1
            ? { backgroundColor: "rgba(242, 57, 54, .3)" }
            : id === 2
            ? { backgroundColor: "rgba(41, 114, 225, 0.3)" }
            : { backgroundColor: "rgba(77, 164, 78, 0.3)" }
        }
      >
        {icon}
      </div>
      {/* text part */}
      <div className="featureTextDiv">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
