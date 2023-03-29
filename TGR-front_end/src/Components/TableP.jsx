import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ color: "white" }} component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell style={{ color: "white" }} align='right'>
          {row.calories}
        </TableCell>
        <TableCell style={{ color: "white" }} align='right'>
          {row.fat}
        </TableCell>
        <TableCell style={{ color: "white" }} align='right'>
          {row.carbs}
        </TableCell>
        <TableCell style={{ color: "white" }} align='right'>
          {row.protein}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, color: "white" }}
          colSpan={6}
        >
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                color={"white"}
                variant='h6'
                gutterBottom
                component='div'
              >
                History
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "white" }}>Date</TableCell>
                    <TableCell style={{ color: "white" }}>Customer</TableCell>
                    <TableCell style={{ color: "white" }} align='right'>
                      Amount
                    </TableCell>
                    <TableCell style={{ color: "white" }} align='right'>
                      Total price ($)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell
                        style={{ color: "white" }}
                        component='th'
                        scope='row'
                      >
                        {historyRow.date}
                      </TableCell>
                      <TableCell style={{ color: "white" }}>
                        {historyRow.customerId}
                      </TableCell>
                      <TableCell style={{ color: "white" }} align='right'>
                        {historyRow.amount}
                      </TableCell>
                      <TableCell style={{ color: "white" }} align='right'>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer
      sx={{ borderRadius: 3, backgroundColor: "#252525" }}
      component={Paper}
    >
      <Table aria-label='collapsible table'>
        <TableHead sx={{ background: "black" }}>
          <TableRow>
            <TableCell />
            <TableCell style={{ color: "white" }}>Dessert</TableCell>
            <TableCell style={{ color: "white" }} align='right'>
              Calories
            </TableCell>
            <TableCell style={{ color: "white" }} align='right'>
              Fat&nbsp;(g)
            </TableCell>
            <TableCell style={{ color: "white" }} align='right'>
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell style={{ color: "white" }} align='right'>
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
