import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { env } from "../config";

const OrdersPage = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getEquipment();
  }, []);

  let getEquipment = async () => {
    try {
      let response = await axios.get(`${env.api}/orders`);
      setOrder(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <TopBar />
      <Table className="align-middle text-center" striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Equipment Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {order.map((el) => {
            return (
              <tr className="align-middle">
                <td>{el.user}</td>
                <td>{el.Name}</td>
                <td>{el.Quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default OrdersPage;
