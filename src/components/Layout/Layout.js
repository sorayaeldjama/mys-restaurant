import React from "react";
import Navbar from "./Navbar.js"
import Footer from "./Footer"
const Layout =({children})=>{
return(
    <>
<Navbar></Navbar>
<div>{children}</div>

<Footer></Footer>

    </>
);
};
export default Layout ; 