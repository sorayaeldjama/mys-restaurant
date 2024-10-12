import React from "react";
import Layout from "../components/Layout/Layout.js";
import restaurant from "../../src/images/restaurant.jpg"

const Home = ()=>{
    return (
<Layout>
    <div className="home" style={{backgroundImage : `url(${restaurant})`}}>
    <h1>Les plats de MyRestaurant</h1>

    </div>
</Layout>

    )
};
export default Home ; 