import {Stack, CircularProgress, LinearProgress, Divider} from "@mui/joy";
import {Grid, Tooltip} from "@mui/joy";

import {getYearsFromMonths} from "../utils";

const TotalExperienceCard = ({data}) => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      className="total-experience-card reveal"
    >
      {/* <div className="experience-details-title reveal">Total Experince</div>
      <Divider className="reveal" /> */}
      {/* <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" className="reveal" />}
        className="reveal"
      >
        <CircularProgress
          sx={{"--CircularProgress-size": "60px"}}
          determinate
          value={10}
          color="success"
        >
          <Stack justifyContent="center" alignItems="center">
            <div className="experience-year">
              {getYearsFromMonths(data?.totalExperienceInMonths)}
            </div>
            <div className="experience-year-label">Years</div>
          </Stack>
        </CircularProgress>
        <CircularProgress
          sx={{"--CircularProgress-size": "60px"}}
          determinate
          value={18}
          color="primary"
        >
          <Stack justifyContent="center" alignItems="center">
            <div className="experience-year">
              {data?.totalExperienceInMonths -
                getYearsFromMonths(data?.totalExperienceInMonths) * 12}
            </div>
            <div className="experience-year-label">Months</div>
          </Stack>
        </CircularProgress>
      </Stack>
      <Divider className="reveal" /> */}
      {/* <CircularProgress
        sx={{"--CircularProgress-size": "50px"}}
        determinate
        value={10}
        color="success"
      >
        <Stack justifyContent="center" alignItems="center">
          <div className="experience-year">{data?.totalCompaniesWorkedFor}</div>
          <div className="experience-year-label">Companies</div>
        </Stack>
      </CircularProgress> */}

      <div className="experience-details-title reveal">Full Time Experince</div>
      <Divider className="reveal" />
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" className="reveal" />}
        className="reveal"
      >
        <CircularProgress
          sx={{"--CircularProgress-size": "100px"}}
          determinate
          value={10}
          color="success"
        >
          <Stack justifyContent="center" alignItems="center">
            <div className="experience-year">
              {getYearsFromMonths(data?.totalFullTimeExperience)}
            </div>
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
            <div className="experience-year">
              {data?.totalFullTimeExperience -
                getYearsFromMonths(data?.totalFullTimeExperience) * 12}
            </div>
            <div className="experience-year-label">Months</div>
          </Stack>
        </CircularProgress>
      </Stack>
      {/* <div className="experience-details-title reveal">
        Internships Experince
      </div>
      <Divider className="reveal" />
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" className="reveal" />}
        className="reveal"
      >
        <CircularProgress
          sx={{"--CircularProgress-size": "80px"}}
          determinate
          value={10}
          color="success"
        >
          <Stack justifyContent="center" alignItems="center">
            <div className="experience-year">
              {getYearsFromMonths(data?.totalInternshipExperience)}
            </div>
            <div className="experience-year-label">Years</div>
          </Stack>
        </CircularProgress>
        <CircularProgress
          sx={{"--CircularProgress-size": "80px"}}
          determinate
          value={18}
          color="primary"
        >
          <Stack justifyContent="center" alignItems="center">
            <div className="experience-year">
              {data?.totalInternshipExperience -
                getYearsFromMonths(data?.totalInternshipExperience) * 12}
            </div>
            <div className="experience-year-label">Months</div>
          </Stack>
        </CircularProgress>
      </Stack> */}
    </Stack>
  );
};

const TechnologyExperienceCard = ({data}) => {
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
        {data &&
          data.map((technology) => {
            return (
              <Grid className="reveal" key={technology.name}>
                <Tooltip arrow title={technology.name} variant="solid">
                  <Stack className="technology-experience-tile">
                    <span className="technology-experience-logo">
                      <img src={technology.logo} alt={technology.name} />
                    </span>
                    <LinearProgress
                      determinate
                      value={technology.ratingOutOf100}
                      variant="outlined"
                      color="success"
                    />
                  </Stack>
                </Tooltip>
              </Grid>
            );
          })}
      </Grid>
    </Stack>
  );
};
const ExperienceCard = ({data}) => {
  return (
    <Stack className="experience-details" spacing={2}>
      <TotalExperienceCard data={data} />
      <TechnologyExperienceCard data={data.technologies} />
    </Stack>
  );
};
export default ExperienceCard;
