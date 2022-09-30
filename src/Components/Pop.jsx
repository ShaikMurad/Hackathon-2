import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

let data = [
  {
    id: 1,
    image:
      "https://images.thdstatic.com/productImages/226d0115-8192-434a-a953-61ec6673d4a1/svn/southland-augers-sea438-64_600.jpg",
    title: "AUGER",
  },
  {
    id: 2,
    image: "https://5.imimg.com/data5/MG/ZI/WA/GLADMIN-12/case9-500x500.jpg",
    title: "BACKHOE LOADER",
  },
  {
    id: 3,
    image:
      "https://5.imimg.com/data5/HH/AI/MY-7947679/heavy-duty-compressor-500x500.jpg",
    title: "COMPRESSOR",
  },
  {
    id: 4,
    image:
      "https://5.imimg.com/data5/UY/AA/MY-7692825/dth-drilling-rig-500x500.jpg",
    title: "DTH",
  },
  {
    id: 5,
    image:
      "https://5.imimg.com/data5/IK/OW/CZ/SELLER-21118432/heavy-duty-rock-breaker-excavator-500x500.jpg",
    title: "EXCAVATOR",
  },
];

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
  const dat = params.id - 1;
  const [name, setName] = React.useState("");
  const [name1, setName1] = React.useState("");
  const [currency, setCurrency] = React.useState("EUR");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange1 = (event) => {
    setName(event.target.value);
  };

  const handleChange3 = (event) => {
    setCurrency(event.target.value);
  };
  console.log(dat);
  return (
    <Modal.Dialog className="mt-5">
      <Modal.Header className="mb-3">
        <h1>About the Equipment</h1>
      </Modal.Header>
      <Modal.Header
        onClick={() => {
          navigate("/equipment");
        }}
        closeButton
      >
        <Modal.Title>{data[dat].title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <img
            style={{ width: "20rem", height: "18rem" }}
            src={data[dat].image}
            alt={data[dat].title}
          />
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
              value={name}
              onChange={handleChange}
            />
            <TextField
              type="number"
              id="outlined-uncontrolled"
              label="Quantity"
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
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Rental Period"
              value={currency}
              onChange={handleChange3}
              helperText="Please select your Period"
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
              name="birthdaytime"
            />
            <input className="btn btn-primary mx-3" type="submit" />
          </Box>
          <Box>
            <label for="birthdaytime">To</label>
            <br />
            <input
              type="datetime-local"
              id="birthdaytime"
              name="birthdaytime"
            />
            <input className="btn btn-primary mx-3" type="submit" />
          </Box>
        </form>
      </Modal.Body>

      <Modal.Footer className="mb-5">
        <Button as={Link} to="/cart" variant="primary">
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Pop;
