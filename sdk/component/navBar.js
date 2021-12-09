import React, { useState } from "react";
import styles from "../../styles/navBar.module.scss";
import { useRouter } from "next/router";
import TableRequestList from "./tableRequestList";

function NavBar() {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      {isSelected && <TableRequestList handleStateFunction={isSelected} />}
      <div className={styles.navBar}>
        <div className={styles.left}>
          <img src="./White BG@2x.png" width="73px" height="51px" />
          <div className={styles.Dashboard}>Dashboard</div>
        </div>
        <div className={styles.right}>
          <img
            src="./Group 1623@2x.png"
            width="73px"
            height="51px"
            onClick={() => {
              setIsSelected(!isSelected);
            }}
          />
          <img
            src="./Icon ionic-ios-log-out@2x.png"
            width="73px"
            height="51px"
            onClick={() => {
              router.push("/login");
            }}
          />
        </div>
      </div>
    </>
  );
}
export default NavBar;