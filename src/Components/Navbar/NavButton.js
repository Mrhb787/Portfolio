import React from "react";
import {useNavigate} from "react-router-dom";

// MUI Components
import {Button, Typography} from "@mui/material";

// Custom Styling
const NavButtonStyle = {
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
};

const NavButton = ({variant, value, color, icon, url}) => {
  const navigate = useNavigate();
  return (
    <Button
      variant={variant}
      color={color}
      size="small"
      sx={NavButtonStyle}
      startIcon={icon}
      onClick={(e) => {
        if (value === "Resume") {
          window.open(url, "_blank");
        } else {
          navigate(url);
        }
      }}
    >
      <Typography variant="caption" sx={{lineHeight: "0"}}>
        {value}
      </Typography>
    </Button>
  );
};

export default NavButton;
