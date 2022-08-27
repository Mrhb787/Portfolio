import React from "react";

// Mui Components
import {Stack} from "@mui/material";

// Small Components
import Loader from "../Small Components/Loader";

const Home = () => {
  return (
    <Stack
      sx={{minHeight: "calc(100vh - 65px)", width: "100%"}}
      justifyContent="center"
      alignItems="center"
    >
      <Loader />
    </Stack>
  );
};

export default Home;
