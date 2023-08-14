import {Alert, CircularProgress, Typography, Box, Button} from "@mui/joy";
import Warning from "@mui/icons-material/Warning";
const UnderDev = () => {
  return (
    <Alert
      variant="soft"
      color="danger"
      invertedColors
      startDecorator={
        <CircularProgress size="lg" determinate value={100}>
          <Warning />
        </CircularProgress>
      }
      sx={{
        alignItems: "flex-start",
        gap: "1rem",
        position: "fixed",
        top: 74,
        left: 10,
        zIndex: 100,
      }}
    >
      <Box sx={{flex: 1}}>
        <Typography level="title-md">Under Development</Typography>
        <Typography level="body-md">
          Please Visit Later I am doing some Changes :)
        </Typography>
        <Box sx={{mt: 2, display: "flex", justifyContent: "flex-end", gap: 1}}>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => {
              window.history.back();
            }}
          >
            Take me Back
          </Button>
          <Button
            variant="solid"
            size="sm"
            color="success"
            onClick={() => {
              window.open("https://github.com/mrhb787", "_blank");
            }}
          >
            View Github Profile
          </Button>
        </Box>
      </Box>
    </Alert>
  );
};

export default UnderDev;
