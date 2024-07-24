import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/store";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  // dispatch
  const dispatch = useDispatch();
  // state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  // handel inputs change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // from handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        dispatch(authAction.login());
        localStorage.setItem("userId", data?.user._id);
        toast.success("user login successfully..☺️");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
        >
          <Typography variant="h4" padding={3} textAlign="center">
            Login
          </Typography>

          <TextField
            placeholder="email"
            value={inputs.email}
            onChange={handleChange}
            name="email"
            margin="normal"
            type={"email"}
            required
          />
          <TextField
            placeholder="password"
            value={inputs.password}
            onChange={handleChange}
            name="password"
            margin="normal"
            type={"password"}
            required
          />
          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/register")}
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="primary"
          >
            Not a user ? Please Register
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;
