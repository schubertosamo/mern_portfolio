import React from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  Avatar,
  makeStyles,
  Button,
} from "@mui/material";
import CommonButton from "../../components/common/button/CommonButton";
import { LinkedIn, Instagram, Twitter, GitHub } from "@mui/icons-material";
import ProfilePicture from "../../assets/images/profile-picture.png";

const useStyles = {
  root: {
    flexGrow: 1,
    // paddingTop: theme.spacing(3),
    // paddingBottom: spacing(3),
    // backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    width: 200,
    height: 200,
    // margin: theme.spacing(2),
  },
  profileInfo: {
    // margin: theme.spacing(2),
  },
};

const About = () => {
  const classes = useStyles;

  return (
    <Grid style={{ marginTop: "5rem" }}>
      <Box sx={classes.root}>
        <Container maxWidth="md">
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Avatar
                sx={classes.avatar}
                src={ProfilePicture}
                alt="Profile picture"
              />
            </Grid>
            <Grid item>
              <Typography variant="h4">Shu Matsunaga 松永 修</Typography>
              <Typography variant="subtitle1">
                Developer / Music Lover
              </Typography>
              <Box sx={classes.profileInfo}>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae risus nec dolor consequat malesuada. Aliquam a fringilla
                  lectus. Etiam lobortis nisi est, vel iaculis tellus imperdiet
                  non. Nullam non eros sit amet dolor ultrices bibendum quis sed
                  quam. Nam imperdiet arcu at eros gravida, quis varius quam
                  porttitor.
                </Typography>
              </Box>
              <CommonButton variant="contained" color="primary">
                Contact Me
              </CommonButton>
              <Button
                href="https://www.linkedin.com/in/shu-matsunaga-000735170"
                target="_blank"
              >
                <LinkedIn />
              </Button>
              <Button href="https://github.com/schubertosamo" target="_blank">
                <GitHub />
              </Button>
              <Button
                href="https://www.instagram.com/schubert_osamo"
                target="_blank"
              >
                <Instagram />
              </Button>
              <Button
                href="https://twitter.com/taidanokatamari"
                target="_blank"
              >
                <Twitter />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Grid>
  );
};

export default About;
