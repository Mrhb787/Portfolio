import {Alert, Typography, Chip} from "@mui/joy";

const WorkExperienceTile = ({title, icon, content, timeline}) => {
  return (
    <Alert
      key={title}
      sx={{alignItems: "flex-start"}}
      startDecorator={icon}
      variant="soft"
      endDecorator={<Chip>{timeline}</Chip>}
    >
      <div>
        <div>{title}</div>
        <Typography level="body-sm">{content}</Typography>
      </div>
    </Alert>
  );
};

export default WorkExperienceTile;
