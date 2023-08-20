import {Fragment} from "react";
import {Stack, Typography} from "@mui/material";
import {Divider, Chip} from "@mui/joy";
import TextAnimated from "../../assets/components/textanimations";
import WorkExperienceTile from "../../assets/components/workexperiencetile";
import ExperienceCard from "../../assets/components/experiencecard.jsx";
import Steps from "../../assets/components/steps";
const ExperienceItem = (props) => {
  const {
    organizationLogo,
    organizationName,
    isCurrentOrganization,
    experience,
  } = props;
  return (
    <Stack spacing={2} className="experience-item reveal">
      {isCurrentOrganization && (
        <div className="experience-org">
          <Chip color="success">Currently Working</Chip>
        </div>
      )}
      {!isCurrentOrganization && (
        <div className="experience-org">
          <Chip color="primary" variant="solid">
            Worked
          </Chip>
        </div>
      )}
      <Stack direction="row" spacing={4} alignItems="center">
        <img
          src={organizationLogo}
          alt={organizationName}
          className="experience-item-img"
        />
        <Typography variant="h4">{organizationName}</Typography>
      </Stack>
      <Divider />
      <Steps>
        {experience
          .sort((a, b) => b.id - a.id)
          .map((exp, index) => (
            <Fragment key={index}>
              <WorkExperienceTile data={exp} />
            </Fragment>
          ))}
      </Steps>
    </Stack>
  );
};

const Experience = ({data}) => {
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
      <Stack direction="row" spacing={2}>
        <ExperienceCard data={data.details} />
        <Stack spacing={6} className="experience-items-container">
          {data.details &&
            data.details.organizations.map((organization) => (
              <Fragment key={organization.organizationId}>
                <ExperienceItem {...organization} />
              </Fragment>
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Experience;
