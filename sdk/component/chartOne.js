import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import styles from "../../styles/Card.module.scss";
import { baseurl } from "../../utility/auth.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { format } from "date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartOne() {
  const [location, setLocation] = React.useState("");
  const [chart1, setChart1] = React.useState([]);
  const [days, setDays] = React.useState("");

  useEffect(() => {
    const day = async () => {
      try {
        const responseChart1 = await fetch(
          `${baseurl}/api/store-manager/dashboard/nsg/${days}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: localStorage.getItem("JWTsessionToken"),
            },
          }
        );
        const responseChartData = await responseChart1.json();
        setChart1(responseChartData);
        console.log(responseChartData);
      } catch (error) {
        console.log(error);
      }
    };
    day();
  }, [days]);

  const { date, now, Scheduled } = useMemo(() => {
    return {
      date: chart1.map((item) => {
        return format(new Date(item.date), "dd/mm");
      }),
      now: chart1.map((item) => {
        return item.nowOrders;
      }),
      Scheduled: chart1.map((item) => {
        return item.scheduledOrders;
      }),
    };
  }, [chart1]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];
  // const labels1 = ["200", "100", "400", "500", "801"];
  // const labels2 = ["50", "150", "450", "70", "690"];
  const data = {
    labels: date,
    datasets: [
      {
        label: "Now",
        data: now,
        backgroundColor: "#6AFF6A",
      },
      {
        label: "Scheduled   ",
        data: Scheduled,
        backgroundColor: "#FF8383",
      },
    ],
  };
  return (
    <>
      <div className={styles.Chart1}>
        <FormControl>
          <InputLabel id="AllLocation">All Location</InputLabel>
          <Select
            labelId="Location"
            id="AllLocation"
            value={location}
            label="AllLocation"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            sx={{ padding: "0.1rem 5rem 0.1rem 5rem" }}
          >
            <MenuItem value={1}>Location 1</MenuItem>
            <MenuItem value={2}>Location 2</MenuItem>
            <MenuItem value={3}>Location 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="Days">Days</InputLabel>
          <Select
            labelId="Days"
            id="Days"
            value={days}
            label="Days"
            onChange={(e) => {
              setDays(e.target.value);
            }}
            sx={{ padding: "0.1rem 5rem 0.1em 5rem" }}
          >
            <MenuItem value={14}>Last 14 Days</MenuItem>
            <MenuItem value={30}>Last 30 Days</MenuItem>
            <MenuItem value={60}>2 Months</MenuItem>
          </Select>
        </FormControl>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default ChartOne;
