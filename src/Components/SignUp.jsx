import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import icon from "../Assets/icon.png";
import { useFormik } from "formik";
import { env } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";

const SignUp = () => {
  let context = useContext(UserContext);
  let navigate = useNavigate();
  const { setUser, admin, setAdmin } = useContext(UserContext);
  const [checkAdmin, setCheckAdmin] = useState(false);
  const [adminKey, setAdminKey] = useState("");

  let formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      password: "",
      AdminKey: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      // try {
      //   let loginData = await axios.post(`${env.api}/login`, values);
      //   if (loginData.status === 200) {
      //     window.localStorage.setItem("app-token", loginData.data.token);
      //     navigate("/login");
      //   }
      // } catch (err) {
      //   console.log(err);
      //   alert(err.response.data.message);
      // }
    },
  });

  // style
  const paperStyle = { padding: "30px 20px", width: 340, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid className="mb-3" align="center">
          <img style={{ width: "100px" }} src={icon} />
          <h2 style={headerStyle}>SignUp</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className="mb-3"
            fullWidth
            label="Name"
            placeholder="Enter your name"
            value={formik.values.Name}
            onChange={formik.handleChange}
            name="Name"
          />
          <TextField
            className="mb-3"
            fullWidth
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
          />
          <TextField className="mb-3" fullWidth label="Password" />
          <TextField
            fullWidth
            label="Confirm Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
          />
          {checkAdmin && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="AdminKey"
              label="adminKey"
              type="text"
              id="adminKey"
              value={formik.values.AdminKey}
              onChange={formik.handleChange}
            />
          )}

          <span>
            <Checkbox onClick={() => setCheckAdmin(!checkAdmin)} /> Click if
            Admin
          </span>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="I accept the terms and conditions"
          />
          <Button type="submit" variant="contained" color="primary">
            sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
