import {useState, useEffect, useContext} from "react";
import {UserContext} from "../../Context/userContext";

// firebase services
import {db} from "../../firebase";
import {doc, getDoc} from "firebase/firestore";

// MUI Components
import {Stack} from "@mui/material";

// Components
import Download from "./ResumeDownload";
import View from "./ResumeViewer";
import Update from "./UpdateResume";

const Resume = () => {
  const [user] = useContext(UserContext);
  const [url, setUrl] = useState();

  const getResumeLink = async () => {
    const docRef = doc(db, "resume", "resumeWork");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const resumeUrl = docSnap.data().url;
      setUrl(resumeUrl);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  // fetch resume link from firebase
  useEffect(() => {
    getResumeLink();
  }, [url]);

  return (
    <Stack
      sx={{minHeight: "calc(100vh - 48px)", position: "fixed", width: "100%"}}
    >
      <Download url={url} />
      <View url={url} />
      {user && user?.accessToken && <Update setUrl={setUrl} />}
    </Stack>
  );
};

export default Resume;
