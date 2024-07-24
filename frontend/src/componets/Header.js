import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../redux/store";
import toast from "react-hot-toast";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state
  const [value, setValue] = useState();
  // logout
  const handleLogout = () => {
    try {
      dispatch(authAction.logout());
      toast.success("logout Successfully :)");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>lBlog App</Typography>
          {isLogin && (
            <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab label="Blog" LinkComponent={Link} to="/blogs" />
                {/* <Tab label="My Blogs2" LinkComponent={Link} to="/my-blogs" /> */}
                <Tab
                  label="create Blog"
                  LinkComponent={Link}
                  to="/create-blog"
                />
              </Tabs>
            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  register
                </Button>
              </>
            )}
            {isLogin && (
              <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
