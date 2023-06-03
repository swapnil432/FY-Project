import { getTransaction } from "@/SmartContractFunctions";
import {
  styled,
  Table,
  TableBody,
  tableCellClasses,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MainContainer = styled("div")({
  marginTop: "5rem",
  borderRadius: "1.25rem",
  borderStyle: "solid",
  borderWidth: "0.06rem",
  borderColor: "#B2BEB5",
  paddingTop: "3.1rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingBottom: "3.1rem",
  marginBottom: "5rem",
});


function unixTimeToDate(unixTime) {
  // Create a new Date object with the Unix time in milliseconds
  unixTime = parseInt(unixTime);
  console.log("unix time: ", unixTime)
  var date = new Date(unixTime * 1000);

  // Extract the components of the date
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // Months are zero-based
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Format the date components
  var formattedDate = year + '-' + addLeadingZero(month) + '-' + addLeadingZero(day);
  var formattedTime = addLeadingZero(hours) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds);

  // Return the formatted date and time
  return formattedDate + ' ' + formattedTime;
}

function addLeadingZero(number) {
  // Add a leading zero if the number is less than 10
  return number < 10 ? '0' + number : number;
}


export default function ChainofTitle({propertyID}) {
  const [transactions, setTransactions] = useState([]);

  const getPropertyTransaction = async ()=>{
    let {result:TransactionData, error} = await getTransaction(propertyID);
    if(error){
      alert("Error occured while gettting transactions");
      return;
    }
    console.log("transactions" ,TransactionData)
    setTransactions(TransactionData)
  }

  useEffect(() => {
    getPropertyTransaction()
  }, [propertyID])
  
  return (
    <MainContainer>
      <Typography variant="h6" sx={{ marginTop: 2, fontWeight: "bold" }}>
        Chain Of Title
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Time of Purchase</StyledTableCell>
              <StyledTableCell align="center">
                Current Owner
              </StyledTableCell>
              <StyledTableCell align="center">
                Previous Owner
              </StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions && transactions.map((row) => (
              <StyledTableRow key={row.date}>
                <StyledTableCell align="center">{unixTimeToDate(row[3])}</StyledTableCell>
                <StyledTableCell align="center">
                  {row[1]}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row[0]}
                </StyledTableCell>
                <StyledTableCell align="center">{web3.utils.fromWei(row[2], 'ether')}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainContainer>
  );
}
