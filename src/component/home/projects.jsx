import {Fragment} from "react";
import {Stack, Typography, Divider, Chip} from "@mui/material";
import {ProjectDetails} from "../../assets/constants";

const ProjectItem = ({imgSrc, title, position, time, work, skills}) => {
  return (
    <Stack direction="row" spacing={3} className="educationItem">
      <img src={imgSrc} alt={imgSrc} className="item-img" />
      <Stack spacing={1}>
        <Typography variant="h5">{title}</Typography>
        <Divider />
        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography>{position}</Typography>
          <Typography>{time}</Typography>
        </Stack>
        <Stack>
          {work.map((e, i) => (
            <Typography key={i} variant="caption">
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
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const Projects = ({loading}) => {
  return (
    <Stack
      className={loading ? "" : "fadeIn"}
      sx={{minHeight: "calc(100vh)"}}
      mt={2}
      spacing={1}
    >
      <Typography className="title-1" variant="h1">
        Projects
      </Typography>
      <div className="title-1-line"></div>
      <Stack spacing={2}>
        {ProjectDetails.map((e) => (
          <Fragment key={e.company}>
            <ProjectItem
              imgSrc={e.imgSrc}
              title={e.title}
              position={e.position}
              time={e.time}
              work={e.work}
              skills={e.skills}
            />
          </Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
