import {Fragment} from "react";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import {Stack, Typography} from "@mui/material";
import {EducationDetails} from "../../assets/constants";
const EducationItem = ({imgSrc, title, subject, year, grade}) => {
  return (
    <Card variant="outlined">
      <Stack direction="row" spacing={3} className="educationItem">
        <img src={imgSrc} alt={title} className="item-img" />
        <Stack spacing={1}>
          <Typography variant="h6">{title}</Typography>
          <Divider inset="context" />
          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography variant="caption">{subject}</Typography>
            <Typography variant="caption">{year}</Typography>
          </Stack>
          <Typography>
            Grade : <strong>{grade}</strong>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

const Education = () => {
  return (
    <Stack className="fadeIn section" spacing={1}>
      <Stack flexGrow={1} sx={{width: "80%"}}>
        <Typography variant="h1">Education</Typography>
        <br />

        <Stack spacing={2}>
          {EducationDetails.map((education) => (
            <Fragment key={education.year}>
              <EducationItem
                imgSrc={education.imgSrc}
                title={education.title}
                subject={education.subject}
                year={education.year}
                grade={education.grade}
              />
            </Fragment>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Education;
