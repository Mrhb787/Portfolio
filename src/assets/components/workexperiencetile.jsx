import {Stack, Alert, Divider, Typography, Chip} from "@mui/joy";

const WorkExperienceTile = ({data}) => {
  return (
    <Stack spacing={1} divider={<Divider orientation="horizontal" />}>
      {data.projects &&
        data.projects.map((project) => {
          return (
            <Alert
              sx={{alignItems: "flex-start"}}
              // startDecorator={icon}
              variant="soft"
              // endDecorator={<Chip>{timeline}</Chip>}
            >
              <div>
                <Typography>{project.title}</Typography>
                <Typography level="body-xs">{project.details}</Typography>
              </div>
            </Alert>
          );
        })}
    </Stack>
  );
};

export default WorkExperienceTile;
