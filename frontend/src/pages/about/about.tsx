import React from "react";
import { Grid } from "@mui/material";
import CommonButton from "../../components/common/button/button";

const About = () => {
  return (
    <Grid style={{ marginTop: "15rem" }}>
      This is profile page
      <CommonButton children="Twitter" color="secondary"></CommonButton>
    </Grid>
  );
};

export default About;
