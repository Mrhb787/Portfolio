import {useState, useContext} from "react";
import {UserContext} from "../../Context/userContext";
import {auth, provider, db} from "../../firebase";
import {signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";

import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";

// MUI-joy Components
import {IconButton, CircularProgress} from "@mui/joy";

// MUI Icons
import GoogleIcon from "@mui/icons-material/Google";
import CheckIcon from "@mui/icons-material/CheckCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Login = () => {
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const [user, setUser] = useContext(UserContext);

  // Login States
  const [LoginStart, setLoginStart] = useState(false);
  const [LoginSuccess, setLoginSuccess] = useState(false);
  const [LoginFailed, setLoginFailed] = useState(false);
  const [LogoutStart, setLogoutStart] = useState(false);

  const handleLogin = () => {
    setLoginStart(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        if (res.user.email === "abhishekworks787@gmail.com") {
          const credential = GoogleAuthProvider.credentialFromResult(res);
          const token = credential.accessToken;

          setLoginStart(false);
          setLoginSuccess(true);
          enqueueSnackbar("Signed In Successfully!", {
            variant: "success",
          });
          setTimeout(() => {
            setUser({
              ...user,
              accessToken: token,
              name: res.user.displayName,
              email: res.user.email,
              profileImg: res.user.photoURL,
            });
          }, 2000);
        } else {
          enqueueSnackbar("Sign In failed. UnAuthorized!", {
            variant: "error",
          });
          setLoginStart(false);
          setLoginFailed(true);
        }
      })
      .catch((error) => {
        // const credential = GoogleAuthProvider.credentialFromError(error);
        setLoginStart(false);
        setLoginFailed(true);
        enqueueSnackbar("Sign In failed. UnAuthorized!", {
          variant: "error",
        });
      });
  };

  const handleLogout = () => {
    setLogoutStart(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setLogoutStart(false);
        setLoginSuccess(false);
        enqueueSnackbar("Signed Out", {
          variant: "success",
        });
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        enqueueSnackbar("Sign Out Failed!", {
          variant: "error",
        });
        setLogoutStart(false);
      });
  };

  return (
    <>
      {!user?.accessToken ? (
        <IconButton
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{color: "whitesmoke"}}
          onClick={handleLogin}
        >
          {LoginStart ? (
            <CircularProgress size="sm" color="neutral" />
          ) : LoginSuccess ? (
            <CheckIcon />
          ) : (
            <GoogleIcon />
          )}
        </IconButton>
      ) : (
        <IconButton
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{color: "whitesmoke"}}
          onClick={handleLogout}
        >
          {LogoutStart ? (
            <CircularProgress size="sm" color="neutral" />
          ) : (
            <LogoutIcon />
          )}
        </IconButton>
      )}
    </>
  );
};
export default Login;
