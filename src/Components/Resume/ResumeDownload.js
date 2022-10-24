// MUI Components
import {Box} from "@mui/material";
// MUI-joy Components
import {Button, CssVarsProvider} from "@mui/joy";

// MUI Icons
import DownloadIcon from "@mui/icons-material/Download";

// generate downloadable link
const generateDownloadLink = (url) => {
  const prefix = "https://drive.google.com/file/d/";
  const suffix = "&export=download";
  const documentId = url.replace(prefix, "").split("/")[0];
  return "https://drive.google.com/uc?id=" + documentId + suffix;
};

const ResumeDownload = ({url}) => {
  // download resume
  const handleClick = () => {
    const downloadLink = generateDownloadLink(url);
    window.open(downloadLink, "_blank");
  };
  return (
    <Box sx={{position: "absolute", top: 10, left: 10}}>
      <CssVarsProvider>
        <Button
          startDecorator={<DownloadIcon />}
          variant="soft"
          color="success"
          size="sm"
          onClick={handleClick}
        >
          Download
        </Button>
      </CssVarsProvider>
    </Box>
  );
};
export default ResumeDownload;
