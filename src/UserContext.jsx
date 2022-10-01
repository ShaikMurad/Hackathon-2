import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { env } from "./config";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    getEquipment();
  }, [data]);

  let getEquipment = async () => {
    try {
      let response = await axios.get(`${env.api}/Equipments`);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        data,
        setData,
        cartData,
        setCartData,
        categoryData,
        setCategoryData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
