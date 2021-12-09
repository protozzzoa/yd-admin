import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrangeButton from "./orangeButton";
import styles from "../../styles/TableRequestList.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

function createData(SNo, UserID, Name, Contact, Action) {
  return { SNo, UserID, Name, Contact, Action };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0),
  createData(2, 237, 9.0, 37, 4.3),
  createData(3, 262, 16.0, 24, 6.0),
  createData(4, 305, 3.7, 67, 4.3),
  createData(5, 356, 16.0, 49, 3.9),
];
const headings = ["SNo", "UserID", "Name", "Contact", "Action"];
export default function TableRequestList({ handleStateFunction }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.wholeContainer}>
        <div className={styles.tableRequestListHeadingContainer}>
          <div className={styles.tableRequestListHeading}>Request List</div>
          <div
            className={styles.tableRequestListCross}
            onClick={() => {
              !handleStateFunction;
            }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </div>
        </div>
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
                    sx={{ color: `#F88A12`, backgroundColor: `#FFFFFF` }}
                  >
                    {one}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.SNo}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.SNo}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.UserID}
                  </TableCell>
                  <TableCell align="center">{row.Name}</TableCell>
                  <TableCell align="center">{row.Contact}</TableCell>

                  <TableCell align="center">
                    <div className={styles.AcceptDenyButton}>
                      <OrangeButton
                        width={"71px"}
                        height={"25px"}
                        background={"#FF0000"}
                        color={"#FFFFFF"}
                        text={"Deny"}
                      />
                      <OrangeButton
                        width={"71px"}
                        height={"25px"}
                        background={"#0E8B00"}
                        color={"#FFFFFF"}
                        text={"Accept"}
                      />
                    </div>
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
