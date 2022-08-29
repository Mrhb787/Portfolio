import {React, useState} from "react";

// Mui Components
import {Stack} from "@mui/material";

// Custom Components
import EducationNav from "./EducationNav";
import EducationData from "./EducationData";
import Skills from "./Skills";
import Certificates from "./Certificates";

const Education = () => {
  const [panel, setPanel] = useState(1);
  return (
    <Stack
      sx={{
        minHeight: "calc(100vh - 64px)",
        width: "100%",
        backgroundColor: "#0A1929",
      }}
      alignItems="center"
      spacing={3}
    >
      <EducationNav panel={panel} setPanel={setPanel} />
      {panel === 1 ? (
        <EducationData />
      ) : panel === 2 ? (
        <Skills />
      ) : (
        <Certificates />
      )}
    </Stack>
  );
};

export default Education;
