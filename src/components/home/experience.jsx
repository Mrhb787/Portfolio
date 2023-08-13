import {Fragment} from "react";
import {Stack, Typography} from "@mui/material";
import {Divider, Alert, Chip} from "@mui/joy";
import {ExperienceData} from "../../assets/constants";
import TextAnimated from "../../assets/components/textanimations";
import WorkExperienceTile from "../../assets/components/workexperiencetile";

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
          <Alert variant="solid" size="sm" color="primary">
            {position}
          </Alert>
          <Divider orientation="vertical" />
          <Alert variant="soft" size="sm" color="primary">
            {employmentType}
          </Alert>
          <Divider orientation="vertical" />
          <Alert variant="soft" size="sm">
            {time}
          </Alert>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          {work.map((e, i) => (
            <Fragment key={i}>
              <WorkExperienceTile
                title={e.title}
                content={e.content}
                timeline={e.timeline}
              />
            </Fragment>
          ))}
        </Stack>
        <Stack direction="row" flexWrap="wrap" sx={{maxWidth: "500px"}}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              size="sm"
              variant="solid"
              color="success"
              sx={{marginTop: "8px", marginLeft: "8px"}}
            >
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
    <Stack
      className="section fadeIn"
      spacing={2}
      sx={{paddingTop: "96px", paddingBottom: "96px"}}
    >
      <TextAnimated
        text="Experience"
        variant="h1"
        className="reveal"
        animation="drowning"
      />
      <Stack spacing={6} className="experience-items-container">
        {ExperienceData.ExperienceDetails.map((e) => (
          <Fragment key={e.company}>
            <ExperienceItem {...e} />
          </Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Experience;
