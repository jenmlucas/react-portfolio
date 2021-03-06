import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import cover from "../../assets/cover/sunset.png";
import resume from "../../assets/resume/resume.pdf";
import Grid from "@mui/material/Grid";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <img src={cover} width="100%" height="500"></img>
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 5 }}
            paddingLeft={5}
          >
            Jennifer Lucas
          </Typography>
          <Grid xs={3}>
            <Button
              href="#about"
              onClick={() => handlePageChange("About")}
              variant={currentPage === "About" ? "contained" : ""}
            >
              About Me
            </Button>
            <Button
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              variant={currentPage === "Portfolio" ? "contained" : ""}
            >
              Portfolio
            </Button>
            <Button
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              variant={currentPage === "Contact" ? "contained" : ""}
            >
              Contact
            </Button>
            <Button color="inherit" href={resume} target="_blank">
              Resume
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
