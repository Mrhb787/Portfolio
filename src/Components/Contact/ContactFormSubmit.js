import {useState} from "react";

// firebase db
import {db} from "../../firebase";
import {collection, doc, setDoc, Timestamp} from "firebase/firestore";

// assets
import LoadingButton from "../assets/LoadingButton";

// SnackBar Notification
import {useSnackbar} from "notistack";

const ContactFormSubmit = ({formData}) => {
  // initialize snackbar
  const {enqueueSnackbar} = useSnackbar();

  // states
  const [Loading, setLoading] = useState(false);
  const checkFormData = async () => {
    if (formData.name.length < 3) {
      throwError("Name should be atleast 3 characters");
    } else if (!formData.email.includes("@")) {
      throwError("Enter Valid Mail");
    } else if (formData.subject.length < 10) {
      throwError("Subject should have atleast 10 Characters");
    } else if (formData.message.length < 25) {
      throwError("Message should have atleast 25 Characters");
    } else {
      setLoading(true);
      const newMessageRef = doc(collection(db, "message"));
      const messageData = {
        ...formData,
        createdAt: Timestamp.fromDate(new Date()),
      };
      await setDoc(newMessageRef, messageData);
      setLoading(false);
      enqueueSnackbar("Message Sent Successfully!", {
        variant: "success",
      });
    }
  };

  const throwError = (msg) => {
    enqueueSnackbar(msg, {
      variant: "error",
    });
  };

  const handleClick = async () => {
    checkFormData();
  };

  return (
    <LoadingButton
      Loading={Loading}
      size="sm"
      variant="soft"
      color="success"
      value="Send"
      onClick={handleClick}
    />
  );
};

export default ContactFormSubmit;
