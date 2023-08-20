import {Stepper, Step, StepLabel, StepContent} from "@mui/material";
import {Typography} from "@mui/joy";

const Steps = ({children}) => {
  return (
    <Stepper orientation="vertical">
      {children.map((child, index) => {
        return (
          <Step key={index} active={true}>
            <StepLabel>
              <Typography className="steps-label">
                {child.props.children.props.data.position}
              </Typography>
              <Typography level="body-xs" className="steps-label">
                {child.props.children.props.data.employmentType} |{" "}
                {child.props.children.props.data.timeline.startDate} -{" "}
                {child.props.children.props.data.timeline.endDate
                  ? child.props.children.props.data.timeline.endDate
                  : "Present"}
              </Typography>
            </StepLabel>
            <StepContent>{child}</StepContent>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default Steps;
