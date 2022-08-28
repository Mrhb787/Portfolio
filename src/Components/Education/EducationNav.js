import {React, useState} from "react";

// MUI Components
import {Box, Tabs, Tab} from "@mui/material";

const EducationNav = ({panel, setPanel}) => {
  const [value, setValue] = useState(panel);
  return (
    <Box sx={{borderBottom: 1, borderColor: "divider"}}>
      <Tabs
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
          setPanel(newValue);
        }}
      >
        <Tab
          label="Education"
          value={1}
          sx={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "whitesmoke",
          }}
        />
        <Tab
          label="Skills"
          value={2}
          sx={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "whitesmoke",
          }}
        />
        <Tab
          label="Certificates"
          value={3}
          sx={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "whitesmoke",
          }}
        />
      </Tabs>
    </Box>
  );
};

export default EducationNav;
