import React from "react";
import "./button.scss";
import { Button, Row } from "react-bootstrap";

const ButtonUser = ({ text, className }) => {
  return (
    <div className="button">
      <Row className="mx-0">
        <Button data-testid="button" type="button" className={className}>
          {text}
        </Button>
      </Row>
    </div>
  );
};

export default ButtonUser;
