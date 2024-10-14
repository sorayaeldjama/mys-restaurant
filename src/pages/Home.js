import React from "react";
import Layout from "../components/Layout/Layout.js";
import restaurant from "../../src/images/restaurant.jpg";
import { Link } from "react-router-dom";
import HomeStyle from "../../src/styles/HomeStyle.css"
const Home = () => {
  return (
    <Layout>
      <div
        className="home"
        style={{
          backgroundImage: `url(${restaurant})`,
        //   height: "100vh", // prend toute la hauteur de la page
        //   backgroundSize: "cover", // l'image couvre tout l'espace
        //   backgroundPosition: "center", // centrer l'image
        //   backgroundRepeat: "no-repeat", // ne pas répéter l'image
        }}
      >
        <div className="headerContainer">
          <h1>Les plats de Mon Restaurant</h1>
          <p>Meilleurs Repas</p>
          <Link to="/menu">
            <button>Commandez</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
