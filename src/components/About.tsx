import { Grid, Typography } from "@mui/material";
import { ABOUT_TEXT } from "../constants/constants";
import "../App.css";
import { motion } from "framer-motion";
import Asha from "../assets/Asha_profile_2.jpeg";

const About = () => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography className="about-me">About Me</Typography>
      </motion.div>
      <Grid container spacing={3} style={{ textAlign: "center" }}>
        <Grid item xs={12} md={6}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img src={Asha} alt="about_pic" style={{ maxHeight: "400px" }} />
          </motion.div>
        </Grid>
        <Grid item xs={8} md={6}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography style={{ textAlign: "left" }} color="primary">
              {ABOUT_TEXT}
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
