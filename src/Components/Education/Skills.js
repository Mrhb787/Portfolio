import React from "react";

// MUI Components
import {Stack, Grid, Typography, Rating} from "@mui/material";

// Data
const ProgrammingLanguages = [
  {Name: "C", Icon: "images/icons/c.svg", value: "4"},
  {Name: "C++", Icon: "images/icons/cpp.svg", value: "4.5"},
  {Name: "JavaScript", Icon: "images/icons/javascript.svg", value: "4"},
];

const Technologies = [
  {Name: "HTML", Icon: "images/icons/html.svg", value: "5"},
  {Name: "CSS", Icon: "images/icons/css.svg", value: "4.5"},
  {Name: "SASS", Icon: "images/icons/sass.svg", value: "3"},
  {Name: "React", Icon: "images/icons/reactjs.svg", value: "4.5"},
  {Name: "Material UI", Icon: "images/icons/mui.svg", value: "4"},
  {Name: "Bootstrap", Icon: "images/icons/bootstrap.svg", value: "5"},
  {Name: "NodeJs", Icon: "images/icons/nodejs.svg", value: "3.5"},
  {Name: "Firebase", Icon: "images/icons/firebase.svg", value: "4"},
  {Name: "Axios", Icon: "images/icons/axios.svg", value: "5"},
];

const Tools = [
  {Name: "Git", Icon: "images/icons/git.svg", value: "5"},
  {Name: "Github", Icon: "images/icons/github.svg", value: "4.5"},
  {Name: "Postman", Icon: "images/icons/postman.svg", value: "4"},
  {Name: "Figma", Icon: "images/icons/figma.svg", value: "3.5"},
  {Name: "VSCode", Icon: "images/icons/vscode.svg", value: "4.5"},
];
const CustomItem = ({Title, Items}) => {
  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: 600,
        border: "1px solid white",
        padding: "10px 24px",
        borderRadius: "10px",
      }}
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "whitesmoke",
        }}
      >
        {Title}
      </Typography>
      <Grid
        container
        sx={{maxWidth: 600}}
        columnSpacing={2}
        rowSpacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {Items
          ? Items.map((item) => (
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <Stack spacing={2} alignItems="center" justifyContent="center">
                  <Stack
                    sx={{
                      padding: "10px",
                      borderRadius: "5px",
                      bgcolor: "whitesmoke",
                    }}
                  >
                    <img
                      src={item.Icon}
                      alt={item.Name}
                      height="50px"
                      width="50px"
                    />
                  </Stack>
                  <Rating
                    size="small"
                    Name={item.Name}
                    value={item.value}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </Grid>
            ))
          : null}
      </Grid>
    </Stack>
  );
};
const Skills = () => {
  return (
    <Stack
      sx={{width: "100%"}}
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <CustomItem Title="Programming Languages" Items={ProgrammingLanguages} />
      <CustomItem Title="Technologies" Items={Technologies} />
      <CustomItem Title="Tools" Items={Tools} />
    </Stack>
  );
};

export default Skills;
