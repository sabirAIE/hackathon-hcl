import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useContext } from "react";
import { AuthContext } from "../ApiData/AuthContext";

const Appbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setUser(null); 
    handleMenuClose(); 
    window.location.reload(); 
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#80c3ff" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Health Care
        </Typography>

        {user ? (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuOpenIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
            >
              <MenuItem component={Link} to="/patient-dashboard" onClick={handleMenuClose}>
                Dashboard
              </MenuItem>
              <MenuItem component={Link} to="/appointment" onClick={handleMenuClose}>
                Book Appointment
              </MenuItem>
              <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/Signup">
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
