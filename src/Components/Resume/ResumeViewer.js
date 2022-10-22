// view Resume

// create viewable google drive link
const generateViewURL = (url) => {
  const prefix = "https://drive.google.com/file/d/";
  const suffix = "/preview";
  const documentId = url.replace(prefix, "").split("/")[0];
  return prefix + documentId + suffix;
};

const ResumeViewer = ({url}) => {
  return (
    <iframe
      title="Resume"
      src={generateViewURL(url)}
      width="100%"
      allow="autoplay"
      height={`${window.innerHeight - 48}px`}
    ></iframe>
  );
};

export default ResumeViewer;
