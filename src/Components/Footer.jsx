import React from "react";
//-----------Bootstrap----------
import Row from "react-bootstrap/Row";

const Footer = () => {
    const year = new Date().getFullYear();
    
  return (
    <Row>
        <div className="spacer"></div>
      <h5 className="mt-auto py-4 bg-dark text-white-50" id="footer">&copy; Marcus Jarlevid {year} </h5>
    </Row>
  );
};

export default Footer;
