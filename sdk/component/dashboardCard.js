import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Card.module.scss";
import OrangeButton from "./orangeButton";

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
  type,
  ...props
}) {
  return (
    <div className={styles.cardContainer}>
      <Typography
        className={styles.headingContainer}
        onClick={() => console.log("hekki")}
        gutterBottom
      >
        {Maintext}
      </Typography>
      {subText ? <h3 className={styles.subheading}>{subText}</h3> : ""}
      <Typography className={styles.digitContainer} color={color} gutterBottom>
        {digit}
      </Typography>
      {isViewDetail ? (
        <OrangeButton
          width={"100%"}
          height={"33px"}
          color={"#FFFFFF"}
          type={type}
          background={
            "transparent linear-gradient(180deg, #F88A12 0%, #CD2D05 100%) 0% 0% no-repeat padding-box"
          }
          text={"View Details"}
        />
      ) : (
        ""
      )}
    </div>
  );
}
