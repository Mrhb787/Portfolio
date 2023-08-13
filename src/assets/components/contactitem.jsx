import * as React from "react";

import {Chip} from "@mui/joy";
import {Link} from "@mui/material";

const ContactItem = ({Icon, type, value, url}) => {
  return <Chip startDecorator={Icon}>{value}</Chip>;
};

export default ContactItem;
