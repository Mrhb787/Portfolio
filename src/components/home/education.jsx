// import {Fragment} from "react";
import {Card, Divider, Chip} from "@mui/joy";
import {Stack, Typography} from "@mui/material";

const EducationItem = (props) => {
  return (
    <Card variant="outlined" className="reveal">
      <Stack direction="row" spacing={2} className="educationItem">
        <img src={props.logo} alt="logo" className="item-img" />
        <Stack spacing={1} sx={{width: "100%"}}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" sx={{maxWidth: 350}}>
              {props.name}
            </Typography>
            <Typography variant="caption">
              {props.startYear} - {props.endYear}
            </Typography>
          </Stack>
          <Divider />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" sx={{maxWidth: 300}}>
              {props.degree || props.board}
            </Typography>
            <Typography variant="caption">
              {props.major || "Class " + props.class}
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            sx={{maxWidth: 450}}
          >
            {props.subjects &&
              props.subjects.map((subject, index) => {
                return (
                  <Chip
                    size="sm"
                    key={subject}
                    sx={
                      index > 0
                        ? {marginLeft: "8px", marginTop: "8px"}
                        : {marginTop: "8px"}
                    }
                  >
                    {subject}
                  </Chip>
                );
              })}
          </Stack>
          <Typography>
            Score : <strong>{props.grade}</strong>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

const Education = ({data}) => {
  const juniorHighSchoolData = data.juniorHighSchool;
  const highSchoolData = data.highSchool;
  const graduationData = data.graduation;
  // const otherEducationData = data.other;
  return (
    <Stack className="fadeIn section education" spacing={1}>
      <Typography variant="h1" className="reveal">
        <b>Education</b>
      </Typography>
      <Stack spacing={2}>
        <EducationItem
          logo={graduationData.instituteLogo}
          name={graduationData.instituteName}
          major={graduationData.major}
          degree={graduationData.degree}
          startYear={graduationData.startYear}
          endYear={graduationData.endYear}
          grade={graduationData.grade}
        />
        <EducationItem
          logo={highSchoolData.schoolLogo}
          name={highSchoolData.schoolName}
          board={highSchoolData.schoolBoard}
          class={highSchoolData.class}
          subjects={highSchoolData.subjects}
          startYear={highSchoolData.startYear}
          endYear={highSchoolData.endYear}
          grade={highSchoolData.grade}
        />
        <EducationItem
          logo={juniorHighSchoolData.schoolLogo}
          name={juniorHighSchoolData.schoolName}
          board={juniorHighSchoolData.schoolBoard}
          class={juniorHighSchoolData.class}
          subjects={juniorHighSchoolData.subjects}
          startYear={juniorHighSchoolData.startYear}
          endYear={juniorHighSchoolData.endYear}
          grade={juniorHighSchoolData.grade}
        />
        {/* {otherEducationData.map((other) => (
          <Fragment key={other.id}>
            <EducationItem
              logo={other.instituteLogo}
              name={other.instituteName}
              major={other.major}
              degree={other.degree}
              startYear={other.startYear}
              endYear={other.endYear}
              grade={other.grade}
            />
          </Fragment>
        ))} */}
      </Stack>
    </Stack>
  );
};

export default Education;
