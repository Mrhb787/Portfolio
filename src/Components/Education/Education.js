import {React, useState} from "react";

// Mui Components
import {Stack} from "@mui/material";

// Custom Components
import EducationNav from "./EducationNav";
import EducationData from "./EducationData";

const Education = () => {
  const [panel, setPanel] = useState(1);
  return (
    <Stack
      sx={{
        minHeight: "calc(100vh - 65px)",
        width: "100%",
        backgroundColor: "#0A1929",
      }}
      alignItems="center"
      spacing={3}
    >
      <EducationNav panel={panel} setPanel={setPanel} />
      {panel === 1 ? <EducationData /> : panel === 2 ? null : null}
    </Stack>
  );
};

export default Education;
