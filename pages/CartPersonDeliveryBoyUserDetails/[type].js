import router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/Combine.module.scss";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import NavBar from "../../sdk/component/navBar";
import PersonBoyUser from "../../sdk/component/PersonBoyUser";
import TotalDeliveryBoy from "../../sdk/component/TotalDeliveryBoy";
import TotalUser from "../../sdk/component/TotalUser";
import { BadgeSharp } from "@mui/icons-material";

function CombineRoutes() {
  const router = useRouter();
  const { type } = router.query;
  console.log(router);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [style, setStyle] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //  /
  //  /details/delivery-boy
  //  /details/cart-boy
  //  /details/users

  useEffect(() => {
    console.log(router);
  }, [router]);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <NavBar />
      <div className={styles.BaapContainer}>
        <div className={styles.Combine}>
          <div
            className={
              type === "TotalCartPerson" ? styles.active : styles.TotalCart
            }
            onClick={() => {
              router.push("/CartPersonDeliveryBoyUserDetails/TotalCartPerson");
            }}
          >
            Cart Person Details
          </div>
          <div
            className={
              type === "TotalDeliveryBoy" ? styles.active : styles.TotalDelivery
            }
            onClick={() => {
              router.push("/CartPersonDeliveryBoyUserDetails/TotalDeliveryBoy");
            }}
          >
            Delivery boy Details
          </div>
          <div
            className={type === "TotalUsers" ? styles.active : styles.TotalUser}
            onClick={() => {
              router.push("/CartPersonDeliveryBoyUserDetails/TotalUsers");
            }}
          >
            User details
          </div>
        </div>
        <div className={styles.tableDiv}>
          {type === "TotalCartPerson" && <PersonBoyUser />}
          {type === "TotalDeliveryBoy" && <TotalDeliveryBoy />}
          {type === "TotalUsers" && <TotalUser />}
        </div>
      </div>

      {/* <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel
          value={value}
          index={0}
          onClick={() => {
            console.log("TotalCartPerson");
            router.push("/CartPersonDeliveryBoyUserDetails/TotalCartPerson");
          }}
        >
          {type === "TotalCartPerson" && <PersonBoyUser />}
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          onClick={() => {
            console.log("TotalDeliveryBoy");
            router.push("/CartPersonDeliveryBoyUserDetails/TotalDeliveryBoy");
          }}
        >
          {type === "TotalDeliveryBoy" && <TotalDeliveryBoy />}
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          onClick={() => {
            console.log("TotalUsers");
            router.push("/CartPersonDeliveryBoyUserDetails/TotalUsers");
          }}
        >
          {type === "TotalUsers" && <TotalUser />}
        </TabPanel>
      </Box> */}
    </div>
  );
}

export default CombineRoutes;
