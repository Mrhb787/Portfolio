// view Resume
import {useEffect, useState} from "react";
import {Stack} from "@mui/material";
import {CircularProgress} from "@mui/joy";
// create viewable google drive link
const generateViewURL = (url) => {
  const prefix = "https://drive.google.com/file/d/";
  const suffix = "/preview";
  const documentId = url.replace(prefix, "").split("/")[0];
  return prefix + documentId + suffix;
};

const ResumeViewer = ({url}) => {
  const [Loading, setLoading] = useState(true);

  // update viewer on url updates
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [url]);

  return (
    <>
      {Loading ? (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{minHeight: "calc(100vh - 48px)"}}
        >
          <CircularProgress size="md" variant="soft" color="primary" />
        </Stack>
      ) : (
        <iframe
          title="Resume"
          src={generateViewURL(url)}
          width="100%"
          allow="autoplay"
          height={`${window.innerHeight - 48}px`}
          loading="lazy"
        ></iframe>
      )}
    </>
  );
};

export default ResumeViewer;
