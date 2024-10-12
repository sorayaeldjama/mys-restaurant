import React, { useState } from "react";
import { Box,Typography,Divider,AppBar } from "@mui/material";
import { NavLink, } from "react-router-dom";

const Navbar =()=>{
const [mobileNavBarOpen,setMobileNavBarOpen]=useState(false);

const onClickMobileNavBar =()=>{
    setMobileNavBarOpen(!mobileNavBarOpen);
};

const navBarMobile =(
    <Box onClick={onClickMobileNavBar} sx ={{textAlign : "center"}}>
 <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        {/* <img src={Logo} alt="logo" height={"70"} width="200" /> */}
        MyRestaurant
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
)
    return(
  <Box>
    <AppBar>

    </AppBar>
  </Box>
    )
}; 
export default Navbar ; 