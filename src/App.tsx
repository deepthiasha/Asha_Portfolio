import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Button, Divider, Grid, Tooltip } from "@mui/material";
import Contact from "./components/Contact";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const dividerStyle = {
  width: "100%",
  backgroundColor: "#292c2e",
  margin: "5rem 0",
};
export default function PrimarySearchAppBar() {
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", maxWidth: "inherit" }}
      >
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography
                variant="h5"
                style={{ cursor: "pointer" }}
                noWrap
                color="primary"
                component="div"
              >
                Asha
              </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Box>
                <Tooltip title="Download Resume">
                  <Button
                    // onClick={onButtonClick}
                    startIcon={<FileDownloadIcon />}
                    href="https://drive.google.com/file/d/1CgV7j-Cw4WPknq3CaS5BWeh_vleSal_y/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </Button>
                </Tooltip>

                <IconButton
                  size="large"
                  color="inherit"
                  href="https://www.linkedin.com/in/kunduru-asha-095606212/"
                  target="_blank"
                >
                  <LinkedInIcon color="primary" />
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://github.com/Ashakunduru-ui"
                  target="_blank"
                >
                  <GitHubIcon color="primary" />
                </IconButton>
                
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div style={{ padding: "0 0 0 2rem", marginTop: "8rem" }}>
        <Hero />

        <Divider component="div" style={dividerStyle} />
        <About />

        <Divider component="div" style={dividerStyle} />

        <Technologies />

        <Divider component="div" style={dividerStyle} />

        <Experience />

        <Divider component="div" style={dividerStyle} />
        <Projects />

        <Divider component="div" style={dividerStyle} />
        <Contact />
      </div>
    </>
  );
}
