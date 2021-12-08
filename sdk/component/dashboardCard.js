import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Card.module.scss";
import { Opacity } from "@mui/icons-material";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function DashboardCard({
  Maintext,
  isViewDetail,
  digit,
  color,
  subText,
  ...props
}) {
  return (
    <div className={styles.cardContainer} sx={{ padding: 0 }}>
      <Typography className={styles.headingContainer} gutterBottom>
        {Maintext}
      </Typography>
      {subText ? <h3 className={styles.subheading}>{subText}</h3> : ""}
      <Typography className={styles.digitContainer} color={color} gutterBottom>
        {digit}
      </Typography>
      {isViewDetail ? (
        <Button
          variant="contained"
          sx={{
            width: "200px",
            height: "33px",
            background:
              "transparent linear-gradient(180deg, #F88A12 0%, #CD2D05 100%) 0% 0% no-repeat padding-box",
          }}
        >
          View Details
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
