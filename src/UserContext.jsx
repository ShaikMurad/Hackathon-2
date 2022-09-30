import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
// import { env } from "../config";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    // getMentor();
    // getStudent();
  }, []);

  //   let getMentor = async () => {
  //     let response = await axios.get(`${env.api}/mentors`);
  //     setMentorName(response.data);
  //   };

  //   let getStudent = async () => {
  //     let response = await axios.get(`${env.api}/students`);
  //     setStudentName(response.data);
  //   };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
