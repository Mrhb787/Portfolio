import React from "react";

//  MUI Components
import {CircularProgress} from "@mui/material";

const Loader = () => {
  return (
    <CircularProgress
      size={40}
      thickness={5}
      sx={{animationDuration: "800ms", color: "grey"}}
    />
  );
};

export default Loader;
