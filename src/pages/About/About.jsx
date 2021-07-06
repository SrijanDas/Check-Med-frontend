import React from "react";
import "./About.css";
import {
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const About = () => {
  const teamMembers = [
    {
      name: "Buddhadeb Garai",
      role: "Co-Founder",
      email: "buddhadebgarai@gmail.com",
      img: "/assets/buddha.jpg",
    },
    {
      name: "Debarghya Ball",
      role: "Co-Founder",
      email: "debarghyaball@gmail.com",
      img: "/assets/ball.jpg",
    },
    {
      name: "Amit Dutta",
      role: "Co-Founder",
      email: "amitdutta@gmail.com",
      img: "/assets/amit.jpg",
    },

    {
      name: "Srijan Das",
      role: "Co-Founder",
      email: "srijandas18.sd@gmail.com",
      img: "/assets/srijan.jpg",
    },
  ];
  return (
    <div className="about">
      <Container maxWidth="lg">
        <div className="about-section">
          <h2>About CheckMeds </h2>
          <p>
            CheckMeds helps you to find availability of medicines nearby you.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            molestiae aliquid modi neque delectus velit fuga, pariatur a
            dolorem, sapiente quas provident officia placeat nemo?Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Perspiciatis saepe
            voluptatibus quibusdam. Tenetur nobis vero quam ad odit fugiat
            quibusdam!
          </p>
        </div>
        <div className="teamMemberCard__container">
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            style={{ marginBottom: "22px " }}
          >
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((m, i) => (
              <Grid key={i} item xs={12} sm={12} md={6} lg={4}>
                <Card className="teamMemberCard">
                  <CardContent>
                    <img src={m.img} alt="" />
                    <Typography variant="h4">{m.name}</Typography>
                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="subtitle1"
                    >
                      {m.role}
                    </Typography>
                    <p
                      style={{ display: "flex", alignItems: "center" }}
                      variant="h6"
                    >
                      <MailIcon style={{ marginRight: "5px" }} /> {m.email}
                    </p>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <GitHubIcon />
                    </IconButton>
                    <IconButton>
                      <LinkedInIcon color="primary" />
                    </IconButton>
                    <IconButton>
                      <FacebookIcon color="primary" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default About;
