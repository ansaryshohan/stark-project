import React from 'react';
import { Container } from "react-bootstrap";

const SubFooter = () => {
  return (
    <Container className="pt-4 mb-4 d-flex justify-content-between align-items-center flex-column flex-md-row">
      <div><p>© Copyright 2021, All Rights Reserved</p></div>
      <div className="d-flex gap-4">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      
    </Container>
  );
};

export default SubFooter;