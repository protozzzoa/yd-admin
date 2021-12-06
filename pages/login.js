import React, { useCallback, useState } from "react";
import styles from "../styles/login.module.scss";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  OutlinedInput,
  Typography,
} from "@mui/material";

const login = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    userID: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const validate = useCallback((values) => {
    const errors = {};

    if (values.userID === "") errors.userID = "Add a valid userID";
    if (values.password === "") errors.password = "Add a valid password";
    console.log(errors);
    return errors;
  }, []);
  const form = useFormik({
    initialValues: {
      userID: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      console.log(form);
    },
  });

  return (
    <>
      <div className={styles.loginContainer}>
        <img src="/Wihite BG horizontal@2x.png" className={styles.headingPng} />
        <div>
          <img src="/Illustrator 1@2x.png" className={styles.loginVendor} />
          <form onSubmit={form.handleSubmit}>
            <Card sx={{ width: 345, height: 418, marginRight: "110px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 28, opacity: 1 }} gutterBottom>
                  <b>LOGIN</b>
                </Typography>
                <Typography
                  sx={{ fontSize: 18, opacity: 0.6, marginBottom: "2rem" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Please Login to your account
                </Typography>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel
                    htmlFor="User ID"
                    sx={{
                      marginLeft: "10px",
                      width: "25ch",
                    }}
                  >
                    User ID
                  </InputLabel>
                  <OutlinedInput
                    name="userID"
                    value={form.values.userID}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="input-with-icon-adornment"
                    sx={{ marginBottom: "2rem" }}
                    error={form.touched.userID && Boolean(form.errors.userID)}
                    endAdornment={
                      <InputAdornment position="end">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    sx={{ marginLeft: "10px", width: "25ch" }}
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={form.values.password}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="password"
                    error={
                      form.touched.password && Boolean(form.errors.password)
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button
                  className={styles.loginButton}
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#f88a12" }}
                  type="submit"
                >
                  <b>Login</b>
                </Button>
                <Typography
                  sx={{
                    fontSize: 12,
                    opacity: 0.6,
                    marginTop: "1rem",
                    marginLeft: "14rem",
                  }}
                  color="#f88a12"
                  gutterBottom
                >
                  forgot password
                </Typography>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
