import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar, Box, Button, Container } from "@mui/material";
import Title from "../Title";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdminDocuments from "../AdminDocuments";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUsers({ setShowDocument }) {
  const [action, setAction] = useState("");
  const [rows, setRows] = useState([]);

  const getUsers = () => {
    const allUsers = [];
    axios({
      method: "GET",
      url: `/api/getcompleteusers`,
    })
      .then((response) => {
        console.log(response.data);
        response.data.map((user, index) => {
          allUsers.push({
            id: index + 1,
            photo: `http://localhost:8000/resources/images/users/${user.user_photo}`,
            userId: user._id,
            name: user.name,
            phone: user.phone,
            aadhar: user.aadhar,
            status: "Approved",
          });
        });
        setRows(allUsers);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };
  const verifyUser = (id) => {
    axios({
      method: "POST",
      url: `/api/verifyuser/${id}`,
    })
      .then((response) => {
        console.log(response.data);
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };
  const rejectUser = (id) => {
    axios({
      method: "POST",
      url: `/api/rejectuser/${id}`,
    })
      .then((response) => {
        console.log(response.data);
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (event) => {
    setAction(event.target.value);
  };
  return (
    <div>
      <Title>Documents Verification</Title>
      <Container>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Users
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Phone
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Aadhar Number
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Document
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                align="center"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <Avatar
                  sx={{ marginTop: "0.5rem", marginLeft: "1rem" }}
                  src={row.photo}
                />
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.aadhar}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setShowDocument(true);
                    }}
                  >
                    Documents
                  </Button>
                </TableCell>
                <TableCell>
                  {row.is_verified === true ? "Not Verified" : "Verified"}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      verifyUser(row.userId);
                    }}
                    style={{ marginRight: 2 }}
                  >
                    Verify
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      rejectUser(row.userId);
                    }}
                  >
                    Reject
                  </Button>
                  {/* <Button></Button>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Status</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={action}
                      label="pending"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Approved</MenuItem>
                      <MenuItem value={2}>Rejected</MenuItem>
                    </Select>
                  </FormControl> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}
