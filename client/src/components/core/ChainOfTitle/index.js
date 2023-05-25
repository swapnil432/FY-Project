import * as React from 'react';
import { 
  styled,
  Table, 
  TableBody,
  tableCellClasses,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper 
} from "@mui/material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(date, currentownername, previousownername, price) {
  return { date, currentownername, previousownername, price};
}

const rows = [
  createData('20/01/2014', 'Riya Naik', 'Sameer S', '11 ETH'),
  createData('20/01/2014', 'Sameer S', 'Siya Shet', '10 ETH'),
  createData('20/01/2014', 'Siya Shet', '' , '9 ETH'),
];

export default function ChainofTitle() {
  return (
    <div>
    <TableContainer component={Paper}  sx={{marginTop: 2}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">Date of Purchase</StyledTableCell>
            <StyledTableCell align="center">Current Owner's Name</StyledTableCell>
            <StyledTableCell align="center">Previous Owner's Name</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.currentownername}</StyledTableCell>
              <StyledTableCell align="center">{row.previousownername}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}