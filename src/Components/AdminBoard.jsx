import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";
import { env } from "../config";

const AdminBoard = ({ data }) => {
  const [active, setActive] = useState([]);
  const [count, setCount] = useState(0);

  let userDelete = async (id) => {
    try {
      await axios.delete(`${env.api}/Equipment/${id}`);
      let user = active.findIndex((el) => el.id === id);
      active.splice(user, 1);
      setCount((c) => c + 1);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setActive(active);
  }, [data]);

  return (
    <>
      <Card className="col-md-3 m-auto mb-4" style={{ width: "18rem" }}>
        <Card.Img
          style={{ width: "15rem", height: "15rem" }}
          className="mt-3"
          variant="top"
          src={data.Image}
        />
        <Card.Body>
          <Card.Title>{data.Name}</Card.Title>
          <Button
            as={Link}
            to={`/editEquipment/${data._id}`}
            variant="btn btn-outline-info"
          >
            Edit Equipment
          </Button>
          <br />
          <Button
            onClick={() => {
              userDelete(data._id);
            }}
            className="mt-3"
            variant="btn btn-outline-info"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default AdminBoard;
