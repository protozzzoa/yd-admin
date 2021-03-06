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
import { borderRight } from "@mui/system";

const headings = [
  "Name",
  "Contact",
  "Primary Location",
  "Total Order",
  "Denied",
  "Cancel",
  "Average Rating",
  "Flagged",
];

export default function TotalUser({ type, onChange }) {
  const router = useRouter();
  const [data, setData] = React.useState([]);

  const getdata = async () => {
    try {
      const fetchedData = await fetch(
        `${baseurl}/api/store-manager/dashboard/user/details`,
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
            // alignItems: "center",
            display: "flex",
            justifyContent: "center",
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
                    sx={{ borderRight: "1px solid rgba(224,224,224,1)" }}
                  >
                    {row.contact}
                  </TableCell>
                  <TableCell
                    align="center "
                    sx={{ borderRight: "1px solid rgba(224,224,224,1)" }}
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
                      color: "#FF0000",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.deniedOrders}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#4612F8",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.canceledOrders}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#21F812",
                      borderRight: "1px solid rgba(224,224,224,1)",
                    }}
                  >
                    {row.totalAmount}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224,224,224,1)" }}
                  >
                    {row.avgRating}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid rgba(224,224,224,1)",
                      padding: 0,
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
