import React from "react";
import  CountUp  from "react-countup";

const CustomerCount = () => {
  return (
    <div className="text-center text-sm-start">
      <h3 className="fw-bold">
        <CountUp
          start={-875.039}
          end={(38482)}
          enableScrollSpy={true}
        />
      </h3>
      <p style={{ fontSize: "14px", marginTop: "-5px" }}>Happy Customers</p>
    </div>
  );
};

export default CustomerCount;
