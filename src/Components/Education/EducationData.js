import React from "react";

// MUI Components
import {Stack} from "@mui/material";

// Small Components
import CustomListItem from "../Small Components/CustomListItem";

const EducationData = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: 800,
        color: "whitesmoke",
        bgcolor: "rgba(18,18,18,0.4)",
        padding: "15px 24px",
        borderRadius: "10px",
      }}
      spacing={3}
    >
      <CustomListItem
        height={[50, 40]}
        width={[50, 40]}
        imgURL="images/iiitl_logo.png"
        imgALT="Indian Institute Of Information Technology, Lucknow"
        primary="Indian Institute Of Information Technology, Lucknow"
        secondary="B.Tech | Information Technology | 8.3 CGPA"
        time="2019-2023"
      />
      <CustomListItem
        height={[50, 50]}
        width={[50, 50]}
        imgURL="images/AakashLogo.jpg"
        imgALT="Aakash Education Services"
        primary="Aakash IIT-JEE Education"
        secondary="Ranker PS Batch"
        time="2018-19"
      />
      <CustomListItem
        height={[50, 40]}
        width={[50, 40]}
        imgURL="images/APSLogo.png"
        imgALT="Army Public School"
        primary="Army Public School, Kanpur"
        time="2017-18"
        secondary="Intermediate | 93% | CBSE Board"
      />
      <CustomListItem
        height={[50, 40]}
        width={[50, 40]}
        imgURL="images/APSLogo.png"
        imgALT="Army Public School"
        primary="Army Public School, Kanpur"
        time="2015-16"
        secondary="High School | 10 CGPA | CBSE Board"
      />
    </Stack>
  );
};

export default EducationData;
