import React from "react";
//-----------Bootstrap----------
import Row from "react-bootstrap/Row";

const Header = () => {
  return (
    <Row>
      <h1 id="header" className="py-4 bg-dark text-white">Marcus Person Handler</h1>
      <div className="spacer"></div>
    </Row>
  );
};

export default Header;
