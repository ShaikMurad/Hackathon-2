import React, { useEffect, useContext } from "react";
import TopBar from "../Components/TopBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { env } from "../config";
import UserContext from "../UserContext";
const Cart = () => {
  const { cartData } = useContext(UserContext);
  useEffect(() => {
    console.log(cartData);
  }, []);
  return (
    <div>
      <TopBar />
      <div className="container">
        <Card
          className="col-md-3 m-auto mb-4 text-center"
          style={{ width: "100%" }}
        >
          <Card.Body>
            <Card.Title>
              <h1>Summary</h1>
            </Card.Title>
            <Card.Img
              style={{ width: "20rem", height: "15rem" }}
              className="mt-3"
              variant="top"
              src="https://5.imimg.com/data5/MG/ZI/WA/GLADMIN-12/case9-500x500.jpg"
            />
            <Card.Text style={{ fontSize: "2vw" }}>
              This Equipment is cost $15 for 1 hour
            </Card.Text>
            <Button variant="btn btn-outline-primary">Checkout</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
