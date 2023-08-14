import {Stack, CircularProgress, LinearProgress, Divider} from "@mui/joy";
import {Grid} from "@mui/joy";

const TotalExperienceCard = () => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      className="total-experience-card reveal"
    >
      <div className="experience-details-title">Total Experince</div>
      <Divider />
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" />}
      >
        <CircularProgress
          sx={{"--CircularProgress-size": "100px"}}
          determinate
          value={10}
          color="success"
        >
          <Stack justifyContent="center" alignItems="center">
            <div className="experience-year">1</div>
            <div className="experience-year-label">Years</div>
          </Stack>
        </CircularProgress>
        <CircularProgress
          sx={{"--CircularProgress-size": "100px"}}
          determinate
          value={18}
          color="primary"
        >
          <Stack justifyContent="center" alignItems="center">
            <div className="experience-year">3</div>
            <div className="experience-year-label">Months</div>
          </Stack>
        </CircularProgress>
      </Stack>
    </Stack>
  );
};

const TechnologyExperienceCard = () => {
  return (
    <Stack
      className="technology-experience-card reveal"
      spacing={1}
      alignItems="center"
    >
      <div className="experience-details-title">Technologies</div>
      <Grid
        container
        spacing={2}
        sx={{flexGrow: 1}}
        className="reveal"
        alignItems="center"
        justifyContent="center"
      >
        <Grid className="reveal">
          <Stack className="technology-experience-tile reveal">
            <span className="technology-experience-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                alt="C++"
              />
            </span>
            <LinearProgress
              determinate
              value={85}
              variant="outlined"
              color="success"
            />
          </Stack>
        </Grid>
        <Grid className="reveal">
          <Stack className="technology-experience-tile">
            <span className="technology-experience-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                alt="C++"
              />
            </span>
            <LinearProgress determinate value={85} />
          </Stack>
        </Grid>
        <Grid className="reveal">
          <Stack className="technology-experience-tile reveal">
            <span className="technology-experience-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                alt="C++"
              />
            </span>
            <LinearProgress determinate value={85} />
          </Stack>
        </Grid>
        <Grid className="reveal">
          <Stack className="technology-experience-tile reveal">
            <span className="technology-experience-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                alt="C++"
              />
            </span>
            <LinearProgress determinate value={85} />
          </Stack>
        </Grid>
        <Grid className="reveal">
          <Stack className="technology-experience-tile reveal">
            <span className="technology-experience-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                alt="C++"
              />
            </span>
            <LinearProgress determinate value={85} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
const ExperienceCard = () => {
  return (
    <Stack className="experience-details" spacing={2}>
      <TotalExperienceCard />
      <TechnologyExperienceCard />
    </Stack>
  );
};
export default ExperienceCard;
