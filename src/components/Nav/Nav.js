import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import cover from "../../assets/cover/sunset.png";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <img src={cover} width="100%" height="500"></img>
      <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Jennifer Lucas
          </Typography>
          <Button
            variant="round"
            color="inherit"
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </Button>
          <Button
            color="inherit"
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Button>
          <Button
            color="inherit"
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Button>
          <Button
            color="inherit"
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
