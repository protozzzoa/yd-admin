import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useMemo } from "react";
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
  const [chart2, setChart2] = React.useState([]);
  const [days, setDays] = React.useState("14");

  useEffect(() => {
    const day = async () => {
      try {
        const responseChart1 = await fetch(
          `${baseurl}/api/store-manager/dashboard/adg/${days}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: localStorage.getItem("JWTsessionToken"),
            },
          }
        );
        const responseChartData = await responseChart1.json();
        setChart2(responseChartData);
        console.log(responseChartData);
      } catch (error) {
        console.log(error);
      }
    };
    day();
  }, [days]);

  const { date, accepted_orders, declined_orders } = useMemo(() => {
    return {
      date: chart2.map((item) => {
        return format(new Date(item.date), "dd/mm");
      }),
      accepted_orders: chart2.map((item) => {
        return item.acceptedOrders;
      }),
      declined_orders: chart2.map((item) => {
        return item.declinedOrders;
      }),
    };
  }, [chart2]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
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
        label: "Accepted",
        data: accepted_orders,
        backgroundColor: "#6AFF6A",
      },
      {
        label: "Denied",
        data: declined_orders,
        backgroundColor: "#FF8383",
      },
    ],
  };
  return (
    <>
      <div styles={{ height: "800px" }}>
        <FormControl>
          <InputLabel id="AllLocation" sx={{ marginLeft: "5rem" }}>
            All Location
          </InputLabel>
          <Select
            labelId="Location"
            id="AllLocation"
            value={location}
            label="AllLocation"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            sx={{ padding: "0.1rem 5rem 0.1rem 5rem", marginLeft: "5rem" }}
          >
            <MenuItem value={1}>Location 1</MenuItem>
            <MenuItem value={2}>Location 2</MenuItem>
            <MenuItem value={3}>Location 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="Days" sx={{ marginLeft: "5rem" }}>
            Days
          </InputLabel>
          <Select
            labelId="Days"
            id="Days"
            value={days}
            label="Days"
            onChange={(e) => {
              setDays(e.target.value);
            }}
            sx={{ padding: "0.1rem 5rem 0.1em 5rem", marginLeft: "5rem" }}
          >
            <MenuItem value={14}>Last 14 Days</MenuItem>
            <MenuItem value={30}>Last 30 Days</MenuItem>
            <MenuItem value={60}>2 Months</MenuItem>
          </Select>
        </FormControl>
        <div styles={{ height: "800px", margin: "7rem" }}>
          <Bar options={options} data={data} />
        </div>
      </div>
    </>
  );
}

export default ChartOne;
