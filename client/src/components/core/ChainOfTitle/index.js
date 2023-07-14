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
import axios from "axios";
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
  const date = new Date(unixTime * 1000);
  const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");
  return formattedDate;
}

export default function ChainofTitle({ propertyID }) {
  const [transactions, setTransactions] = useState([]);
  const [userNames, setUserNames] = useState({});

  useEffect(() => {
    const getPropertyTransaction = async () => {
      try {
        const { result: TransactionData, error } = await getTransaction(propertyID);

        if (error) {
          alert("Error occurred while getting transactions");
          return;
        }

        const names = {};

        await Promise.all(
          TransactionData.map(async (transaction) => {
            try {
              const response = await axios.get(`/api/getusernames/${transaction.newOwner}`);
              names[transaction.newOwner] = response.data.name;
            } catch (err) {
              console.log(err);
              alert("Something went wrong while fetching user names");
            }
          })
        );

        setUserNames(names);
        setTransactions(TransactionData);
      } catch (error) {
        console.log(error);
        alert("Error occurred while getting transactions");
      }
    };

    getPropertyTransaction();
  }, [propertyID]);

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
            <>
            <StyledTableRow key={row.date}>
              <StyledTableCell align="center">{unixTimeToDate(row[3])}</StyledTableCell>
              <StyledTableCell align="center">
                {userNames[row[1]] ?? "Default"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {userNames[row[0]] ?? "Default"}
              </StyledTableCell>
              <StyledTableCell align="center">{web3.utils.fromWei(row[2], 'ether')}</StyledTableCell>
            </StyledTableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </MainContainer>
  );
}
