import React, { useState, useEffect, useContext } from "react";
import TopBar from "../Components/TopBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { env } from "../config";
import UserContext from "../UserContext";
import CheckoutForm from "../Components/CheckOutForm";
const Cart = () => {
  const { cartData } = useContext(UserContext);
  let [total, setTotal] = useState(0);
  let addOrder = async () => {
    try {
      let order = cartData[0];
      let user = await axios.post(`${env.api}/order`, order);
    } catch (err) {
      console.log(err);
    }
  };

  const priceCalculator = (price, rent, period) => {
    if (period === "Days") {
      let x = parseInt(rent);
      let x1 = x * 24;
      let y = parseInt(price);
      let xy = x1 * y;
      return xy;
    } else if (period === "Months") {
      let x = parseInt(rent);
      let y = parseInt(price);
      let x1 = x * 24 * 30;
      let xy = x1 * y;
      return xy;
    } else if (period === "Years") {
      let x = parseInt(rent);
      let y = parseInt(price);
      let x1 = x * 24 * 30 * 12;
      let xy = x1 * y;
      return xy;
    }
  };

  return (
    <div>
      <TopBar />
      {cartData[0] === undefined ? (
        <div className="container text-center mt-5">No item in the Cart</div>
      ) : (
        <div className="container">
          <Card
            className="col-md-3 m-auto mb-4 text-center"
            style={{ width: "100%" }}
          >
            <Card.Body>
              <Card.Title>
                <h1>Summary</h1>
              </Card.Title>
              <Table striped bordered hover>
                <thead className="align-middle">
                  <tr>
                    <th>Equipment</th>
                    <th>Equipment Name</th>
                    <th>
                      Price <br /> <small>for 1hour</small>
                    </th>
                    <th>Quantity</th>
                    <th>Rental Period</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((el, i) => {
                    return (
                      <tr key={i} className="align-middle">
                        <td>
                          <img
                            style={{ width: 100, height: 100 }}
                            src={el.Image}
                            alt={el.Name}
                          />
                        </td>
                        <td>{el.Name}</td>
                        <td>{`$ ${el.Price}`}</td>
                        <td>{el.Quantity}</td>
                        <td>{`${el.Rental} ${el.Period}`}</td>
                        <td>
                          {`$ ${
                            Number(el.Quantity) *
                            priceCalculator(el.Price, el.Rental, el.Period)
                          }`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <CheckoutForm />
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Cart;
