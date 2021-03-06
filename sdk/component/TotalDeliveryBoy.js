import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrangeButton from "./orangeButton";
import styles from "../../styles/PersonBoyUser.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { baseurl } from "../../utility/auth";

const headings = [
  "Name",
  "Contact",
  "Registration Date",
  "Total Order",
  "Denied",
  "Cancel",
  "Total Business",
  "Average rating",
  "Flagged",
];

export default function TotalDeliveryBoy({ type, onChange }) {
  const router = useRouter();
  const [data, setData] = React.useState([]);

  const getdata = async () => {
    try {
      const fetchedData = await fetch(
        `${baseurl}/api/store-manager/dashboard/staff/cart-boy`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("JWTsessionToken"),
          },
        }
      );
      const fetchingData = await fetchedData.json();
      setData(fetchingData);
      console.log(fetchingData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className={styles.wholeContainer}>
        {/* <div className={styles.tableRequestListHeadingContainer}>
          <div className={styles.tableRequestListHeading}>{type}</div>
          <div
            className={styles.tableRequestListCross}
            onClick={() => {
              onChange();
            }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </div>
        </div> */}
        <TableContainer
          sx={{
            borderRadius: "20px",
          }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headings.map((one, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      color: `#707070`,
                      background: "#F88A124D 0% 0% no-repeat padding-box",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {one}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell align="center" component="th" scope="row">
                    {row.id}
                  </TableCell> */}
                  <TableCell
                    align="center"
                    sx={{
                      color: "#F88A12",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#F88A12",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.contact}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#F88A12",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.regDate}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#F88A12",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.totalOrders}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#F88A12",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.deniedOrders}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#F88A12",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.canceledOrders}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#F88A12",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.totalAmount}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#F88A12",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.avgRating}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#F88A12",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.flagged}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
