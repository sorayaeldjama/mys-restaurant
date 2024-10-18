import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Assure que la page occupe toute la hauteur de la fenêtre
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal (flex: 1 prend tout l'espace disponible) */}
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>

      {/* Footer toujours en bas */}
      <Footer />
    </Box>
  );
};

export default Layout;
