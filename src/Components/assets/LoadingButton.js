// MUI-Joy
import {Button, CircularProgress} from "@mui/joy";

const LoadingButton = ({
  startIcon,
  endIcon,
  Loading,
  value,
  color,
  size,
  variant,
  sx,
  onClick,
}) => {
  return (
    <Button
      startDecorator={startIcon}
      endDecorator={
        Loading ? (
          <CircularProgress color="neutral" size={size} variant={variant} />
        ) : (
          endIcon
        )
      }
      disabled={Loading}
      color={color}
      size={size}
      sx={sx}
      onClick={onClick}
      variant={variant}
    >
      {value}
    </Button>
  );
};

export default LoadingButton;
