import {Stack, Typography} from "@mui/material";

import LoaderImg from "../gifs/preloader.gif";
const Preloader = () => {
  return (
    <Stack
      sx={{height: "100vh", width: "100vw"}}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className="preloader"
    >
      <img src={LoaderImg} alt="Loading Portfolio" className="preloader-img" />
      <Typography className="preloader-text">Loading</Typography>
    </Stack>
  );
};

export default Preloader;
