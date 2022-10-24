import {useState} from "react";

// firebase db
import {db} from "../../firebase";
import {doc, setDoc} from "firebase/firestore";

// MUI Components
import {Box, Stack} from "@mui/material";

// MUI-joy Components
import {CssVarsProvider, TextField} from "@mui/joy";

// MUI Icons
import UpdateIcon from "@mui/icons-material/Upload";

// assets
import LoadingButton from "../assets/LoadingButton";

// SnackBar Notification
import {useSnackbar} from "notistack";

const UpdateResume = ({setUrl}) => {
  // initialize snackbar
  const {enqueueSnackbar} = useSnackbar();

  // update states
  const [link, setLink] = useState("");
  const [Loading, setLoading] = useState(false);

  // handle update resume link
  const handleClick = async () => {
    setLoading(true);
    await setDoc(doc(db, "resume", "resumeWork"), {
      url: link,
    });
    setUrl(link);
    setLoading(false);
    enqueueSnackbar("Link Updated Successfully!", {
      variant: "success",
    });
  };

  // handle link change
  const handleChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <Box sx={{position: "absolute", bottom: 10, left: 10}}>
      <CssVarsProvider>
        <Stack spacing={2}>
          <TextField
            size="sm"
            variant="soft"
            label="Google Drive Link"
            onChange={handleChange}
            name="link"
          />
          <LoadingButton
            startIcon={<UpdateIcon />}
            variant="soft"
            color="primary"
            size="sm"
            endIcon={null}
            value="Update"
            Loading={Loading}
            onClick={handleClick}
          />
        </Stack>
      </CssVarsProvider>
    </Box>
  );
};

export default UpdateResume;
