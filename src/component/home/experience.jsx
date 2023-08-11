import {Fragment} from "react";
import {Stack, Typography} from "@mui/material";
import {Divider, Alert, Chip} from "@mui/joy";
import {ExperienceDetails} from "../../assets/constants";
import TextAnimated from "../../assets/components/textanimations";

const ExperienceItem = ({
  imgSrc,
  company,
  position,
  employmentType,
  time,
  work,
  skills,
}) => {
  return (
    <Stack spacing={2} className="educationItem reveal">
      <Stack direction="row" spacing={4} alignItems="center">
        <img src={imgSrc} alt={imgSrc} className="item-img" />
        <Typography variant="h4">{company}</Typography>
      </Stack>
      <Divider />
      <Stack spacing={1}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Alert variant="soft" size="sm" color="success">
            {position}
          </Alert>
          <Alert variant="soft" size="sm" color="primary">
            {employmentType}
          </Alert>
          <Alert variant="soft" size="sm">
            {time}
          </Alert>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          {work.map((e, i) => (
            <Typography key={i}>
              <strong>{e.title}</strong> : {e.content}
            </Typography>
          ))}
        </Stack>
        <Stack
          spacing={1}
          direction="row"
          flexWrap="wrap"
          sx={{maxWidth: "500px"}}
        >
          {skills.map((skill) => (
            <Chip key={skill} size="sm" variant="soft">
              {skill}
            </Chip>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const Experience = () => {
  return (
    <Stack className="section fadeIn" spacing={2} sx={{paddingTop: "64px"}}>
      <TextAnimated
        text="Experience"
        variant="h1"
        className="reveal"
        animation="drowning"
      />
      <Stack spacing={6} className="experience-items-container">
        {ExperienceDetails.map((e) => (
          <Fragment key={e.company}>
            <ExperienceItem {...e} />
          </Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Experience;
