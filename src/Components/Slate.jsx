import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const Slate = ({ data }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Card className="col-md-3 m-auto mb-4" style={{ width: "18rem" }}>
        <Card.Img
          style={{ width: "15rem", height: "15rem" }}
          className="mt-3"
          variant="top"
          src={data.image}
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Button
            as={Link}
            to={`/equipment/driller/${data.id}`}
            variant="btn btn-outline-info"
          >
            Add to Enquiry
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Slate;
