import { Logout, Menu, PersonAddAlt } from "@mui/icons-material";
import { AppBar, Button, IconButton, Tab, Tabs, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback } from "react";
import NavBar from "../../sdk/component/navBar";
import styles from "../../styles/detailView.module.scss";
const DetailView = (params) => {
  const router = useRouter();
  const { detailView } = router.query;
  const changeRoute = useCallback(
    (url) => {
      router.push(url);
    },
    [router]
  );
  return (
    <>
      <AppBar className={styles.navbar} position="static">
        <Toolbar>
          <div className={styles.brandContainer}>
            <img src="/yd-icon.png" alt="" />
            <h1>Dashboard</h1>
          </div>
          <div className={styles.rightNavContainer}>
            <IconButton>
              <PersonAddAlt />
            </IconButton>
            <IconButton>
              <Logout />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className={styles.mainContainer}>
        <div className={styles.tabContainer}>
          <Tabs>
            <Tab
              className={detailView === "cart-person" ? styles.active : ""}
              onClick={() => {
                changeRoute("/details/cart-person");
              }}
              label="Cart Person"
            />
            <Tab
              className={detailView === "delivery-person" ? styles.active : ""}
              onClick={() => {
                changeRoute("/details/delivery-person");
              }}
              label="Delivery Person"
            />
            <Tab
              className={detailView === "user" ? styles.active : ""}
              onClick={() => {
                changeRoute("/details/user");
              }}
              label="User Details"
            />
          </Tabs>
        </div>

        <div className={styles.contentContainer}>
          {detailView === "cart-person" && <h1>cart</h1>}
          {detailView === "delivery-person" && <h1>delivery</h1>}
          {detailView === "user" && <h1>user</h1>}
        </div>
      </div>
    </>
  );
};

export default DetailView;
