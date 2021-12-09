import React from "react";
import Button from "@mui/material/Button";

function OrangeButton({ width, height, background, color, text, ...rest }) {
  return (
    <Button
      variant="contained"
      sx={{
        width: `${width}`,
        height: `${height}`,
        color: `${color}`,
        background: `${background}`,
      }}
    >
      {text}
    </Button>
  );
}

export default OrangeButton;
