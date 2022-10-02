import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import UserContext from "../UserContext";
import axios from "axios";
import { env } from "../config";
import { useFormik } from "formik";

const currencies = [
  {
    value: "Months",
    label: "Months",
  },
  {
    value: "Years",
    label: "Years",
  },
  {
    value: "Days",
    label: "Days",
  },
];
const Pop = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("EUR");
  const [userData, setUserData] = useState([]);
  let context = useContext(UserContext);
  const { data, user, setCartData, cartData, userName } =
    useContext(UserContext);

  // Getting the Particular Equipment
  useEffect(() => {
    getUser(params.id);
  }, [data]);

  let getUser = async (id) => {
    try {
      let response = await axios.get(`${env.api}/Equipment/${id}`);
      setUserData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      Name: "",
      Image: "",
      Price: "",
      Capacity: "",
      Quantity: "",
      Rental: "",
      Period: "",
      From: "",
      To: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.Capacity === "") {
        errors.Capacity = "Please enter Capacity ";
      }
      if (values.Quantity === "") {
        errors.Quantity = "Please enter Quantity";
      }
      if (values.Rental === "") {
        errors.Rental = "Please enter Rental";
      }
      if (values.Period === "") {
        errors.Period = "Please enter Period";
      }
      return errors;
    },
    onSubmit: async (values) => {
      formik.values.user = userName;
      formik.values.Name = userData.Name;
      formik.values.Image = userData.Image;
      formik.values.Price = userData.Price;
      const updatedCart = [...cartData];
      updatedCart.push(values);
      setCartData(updatedCart);
      alert("Enquiry Added");
    },
  });

  return (
    <Modal.Dialog className="mt-5">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header className="mb-3">
          <h1>Fill the form for the required Equipment</h1>
        </Modal.Header>
        <Modal.Header
          onClick={() => {
            navigate("/equipment");
          }}
          closeButton
        >
          <Modal.Title>{userData.Name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            style={{ width: "20rem", height: "18rem" }}
            src={userData.Image}
            alt={userData.Name}
          />
          <h3>About</h3>
          <p>{userData.About}</p>
          <p className="mt-4"> Specify your requirements.</p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-name"
              label="Capacity"
              value={formik.values.Capacity}
              onChange={formik.handleChange}
              name="Capacity"
              helperText={formik.errors.Capacity}
            />

            <TextField
              type="number"
              id="outlined-uncontrolled"
              label="Quantity"
              value={formik.values.Quantity}
              onChange={formik.handleChange}
              name="Quantity"
              helperText={formik.errors.Quantity}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              type="number"
              id="outlined-uncontrolled"
              label="Rental Period"
              value={formik.values.Rental}
              onChange={formik.handleChange}
              name="Rental"
              helperText={formik.errors.Rental}
            />

            <TextField
              id="outlined-select-currency"
              select
              label="Rental Period"
              value={formik.values.Period}
              onChange={formik.handleChange}
              name="Period"
              helperText={formik.errors.Period}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box>
            <label for="birthdaytime">From</label>
            <br />
            <input
              type="datetime-local"
              id="birthdaytime"
              value={formik.values.From}
              onChange={formik.handleChange}
              name="From"
            />
          </Box>
          <Box>
            <label for="birthdaytime">To</label>
            <br />
            <input
              type="datetime-local"
              id="birthdaytime"
              value={formik.values.To}
              onChange={formik.handleChange}
              name="To"
            />
          </Box>
        </Modal.Body>

        <Modal.Footer className="mt-5 mb-5">
          <Button
            disabled={!formik.isValid}
            value="Submit"
            type="submit"
            variant="primary"
          >
            Add to Cart
          </Button>
          <Button className="mx-3" as={Link} to="/cart" variant="primary">
            view cart
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Dialog>
  );
};

export default Pop;
