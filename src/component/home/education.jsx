import {Fragment} from "react";
import {Stack, Typography, Divider} from "@mui/material";
import {EducationDetails} from "../../assets/constants";
const EducationItem = ({imgSrc, title, subject, year, grade}) => {
  return (
    <Stack direction="row" spacing={3} className="educationItem">
      <img src={imgSrc} alt={title} className="item-img" />
      <Stack spacing={1}>
        <Typography variant="h6">{title}</Typography>
        <Divider />
        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography>{subject}</Typography>
          <Typography>{year}</Typography>
        </Stack>
        <Typography>
          Grade : <strong>{grade}</strong>
        </Typography>
      </Stack>
    </Stack>
  );
};

const Education = ({loading}) => {
  return (
    <Stack
      className={loading ? "" : "fadeIn"}
      sx={{minHeight: "calc(100vh - 98px)"}}
      spacing={1}
    >
      <Typography className="title-1" variant="h1">
        Education
      </Typography>
      <div className="title-1-line"></div>
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
  );
};

export default Education;
