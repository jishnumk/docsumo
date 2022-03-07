import React from "react";
import { Spinner } from "react-bootstrap";
import "./spinner.css";

const SpinnerLoad = () => {
  return (
    <Spinner animation="border" role="status" size="sm" as="span">
    </Spinner>
  );
};

export default SpinnerLoad;
