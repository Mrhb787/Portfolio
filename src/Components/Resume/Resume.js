// MUI Components
import {Stack} from "@mui/material";

// Components
import Download from "./ResumeDownload";
import View from "./ResumeViewer";

const Resume = () => {
  const resumeURL =
    "https://drive.google.com/file/d/1kxVtnjJkMBC2WTj7Ao1pgwQvgkYHzy3F/view?usp=sharing";

  return (
    <Stack
      sx={{minHeight: "calc(100vh - 48px)", position: "fixed", width: "100%"}}
    >
      <Download url={resumeURL} />
      <View url={resumeURL} />
    </Stack>
  );
};

export default Resume;
