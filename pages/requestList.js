import * as React from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";

function createData(SNo, UserID, Name, Contact, Action) {
  return { SNo, UserID, Name, Contact, Action };
}

const rows = [
  createData(0, 305, 3.7, 0, 0),
  createData(1, 452, 25.0, 0, 0),
  createData(2, 262, 16.0, 0),
  createData(3, 159, 6.0, 0, 0),
  createData(4, 356, 16.0, 0, 0),
  createData(5, 408, 3.2, 0, 0),
  createData(6, 237, 9.0, 0, 0),
  createData(7, 375, 0.0, 0, 0),
  createData(8, 518, 26.0, 0, 0),
  createData(9, 392, 0.2, 0, 0),
  createData(10, 318, 0, 0, 0),
  createData(11, 360, 19.0, 0, 0),
  createData(12, 437, 18.0, 0, 0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const Root = styled("div")`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #ddd;
  }
`;
const CustomTablePagination = styled(TablePaginationUnstyled)`
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export default function requestList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Root>
      <table style={{ minWidth: 500 }} aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Dessert</th>
            <th>Calories</th>
            <th>Fat</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td style={{ width: 160 }} align="right">
                {row.calories}
              </td>
              <td style={{ width: 160 }} align="right">
                {row.fat}
              </td>
            </tr>
          ))}

          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  "aria-label": "rows per page",
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}
