import React, { useEffect } from "react";
import DashboardCard from "../sdk/component/dashboardCard";
import styles from "../styles/Dashboard.module.scss";
import { baseurl } from "../utility/auth";
import Chart1 from "../sdk/component/chartOne";
import Chart2 from "../sdk/component/chartTwo";
import NavBar from "../sdk/component/navBar";

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
      <NavBar />
      <div className={styles.dashboardWithChartContainer}>
        <DashboardCard
          Maintext={"TotalCart Person"}
          digit={dashboard.cartBoyCount}
          color={"#F88A12"}
          type={"TotalCartPerson"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Total Delivery Boy"}
          type={"TotalDeliveryBoy"}
          digit={dashboard.deliveryBoyCount}
          color={"#F88A12"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Total Users"}
          type={"TotalUsers"}
          digit={dashboard.userCount}
          color={"#19006E"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Unassigned orders"}
          type={"UnassignedOrders"}
          digit={dashboard.unassignedOrders}
          color={"#F88A12"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Total Items"}
          type={"TotalItems"}
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
          type={"Denied/DisputedOrder"}
          digit={dashboard.deniedOrder}
          color={"#F88A12"}
          isViewDetail={true}
        />
        <DashboardCard
          Maintext={"Scheduled order"}
          type={"ScheduledOrder"}
          digit={dashboard.scheduledOrder}
          color={"#F88A12"}
          isViewDetail={true}
        />
      </div>
      <div className={styles.Chart1}>
        <h2>Bookings(Now VS Scheduled)</h2>
        <Chart1 />
      </div>
      <div className={styles.Chart1}>
        <h2>Accepted and denied bookings graph</h2>
        <Chart2 />
      </div>
    </>
  );
}

export default dashboardWithCharts;
