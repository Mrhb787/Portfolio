import {useNavigate} from "react-router-dom";

// MUI Components
import {Stack, Typography} from "@mui/material";

const style = {
  fontFamily: "Plus Jakarta Sans",
  fontWeight: "bolder",
  bgcolor: "whitesmoke",
  color: "#700fe6",
  padding: "0px 6px",
  borderRadius: "15px",
  mr: "3px",
};

const NavTitle = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{cursor: "pointer", mr: 2}}
      onClick={handleClick}
    >
      <Typography sx={style}>A</Typography>
      <Typography sx={{fontFamily: "Plus Jakarta Sans"}}>
        bhishek Singh
      </Typography>
    </Stack>
  );
};

export default NavTitle;
