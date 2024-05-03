import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CustomerRating = () => {
  return (
    <div className="text-center text-sm-start">
      <h4 className="fw-bold">4.8/5</h4>
      <p style={{fontSize:"14px",color:"#12141D"}} className="d-flex flex-column flex-md-row gap-2 align-items-center" >
        {" "}
        <span>
          <FaStar color="#FFC947" size={12} />
          <FaStar color="#FFC947" size={12}/>
          <FaStar color="#FFC947" size={12} />
          <FaStar color="#FFC947" size={12}/>
          <FaStarHalfAlt color="#FFC947" size={12}/>
        </span>
         <span>Rating</span>
      </p>
    </div>
  );
};

export default CustomerRating;
