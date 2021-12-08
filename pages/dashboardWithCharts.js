import React, { useEffect } from "react";
import DashboardCard from "../sdk/component/dashboardCard";
import styles from "../styles/Dashboard.module.scss";
import { baseurl } from "../utility/auth";
import Chart1 from "../sdk/component/chartOne";

function dashboardWithCharts() {
  const [dashboard, setDashboard] = React.useState("");

  useEffect(() => {
    const viewDetail = async () => {
      try {
        const response = await fetch(
          `${baseurl}/api/store-manager/dashboard/stats`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: localStorage.getItem("JWTsessionToken"),
            },
          }
        );
        const fetchingData = await response.json();
        setDashboard(fetchingData);
        console.log(fetchingData);
        console.log("hello");
      } catch (error) {
        console.log(error);
      }
    };

    viewDetail();
  }, []);

  return (
    <>
      <div className={styles.dashboardWithChartContainer}>
        <DashboardCard
          Maintext={"Total Cart Person"}
          digit={dashboard.cartBoyCount}
          color={"#F88A12"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Total Delivery Boy"}
          digit={dashboard.deliveryBoyCount}
          color={"#F88A12"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Total Users"}
          digit={dashboard.userCount}
          color={"#19006E"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Unassigned orders"}
          digit={dashboard.unassignedOrders}
          color={"#F88A12"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Total Items"}
          digit={dashboard.totalItems}
          color={"#F88A12"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Total Active Users"}
          digit={dashboard.activeUsers}
          color={"#0E8B00"}
          subText={"Past 10 days order"}
        />
        <DashboardCard
          Maintext={"Total Ongoing Bookings"}
          digit={dashboard.onGoingOrder}
          color={"#F88A12"}
        />
        <DashboardCard
          Maintext={"Past Week Bookings"}
          digit={dashboard.bookingForLastWeek}
          color={"#F88A12"}
        />
        <DashboardCard
          Maintext={"Denied/Disputed order"}
          digit={dashboard.deniedOrder}
          color={"#F88A12"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Scheduled order"}
          digit={dashboard.scheduledOrder}
          color={"#F88A12"}
          isViewDetail={true}
        />
      </div>
      <div className={styles.Chart1}>
        <h2>Bookings(Now VS Scheduled)</h2>
        <Chart1 />
      </div>
    </>
  );
}

export default dashboardWithCharts;
