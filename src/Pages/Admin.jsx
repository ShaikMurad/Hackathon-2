import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminBoard from "../Components/AdminBoard";
import TopBar from "../Components/TopBar";
import UserContext from "../UserContext";
const Admin = () => {
  const { data } = useContext(UserContext);

  return (
    <div>
      <TopBar />
      <div className="container">
        <Link to="/addEquipment" type="button" className="btn btn-primary mt-4">
          Add Equipment
        </Link>
        <Link to="/order" type="button" className="btn btn-primary mt-4 mx-3">
          Order Page
        </Link>
      </div>
      <div className="container">
        <div className="row mt-5 ">
          {data.map((el, i) => {
            return <AdminBoard key={i} data={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
