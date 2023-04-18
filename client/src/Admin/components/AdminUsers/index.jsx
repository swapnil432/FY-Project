import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {RaisedButton, Avatar, Typography,Button } from '@mui/material';
import Title from '../Title'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdminDocuments from '../AdminDocuments';
import { useEffect, useState } from 'react';

export default function AdminUsers({setShowDocument}) {
  const [action, setAction] = useState('');
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows([{
      "id": 4,
      "orderid":'#00021',
      "date":'15 Mar, 2019',
      "name":'Bruce Springsteen',
      "shipTo":'Long Branch, NJ',
      "paymentMethod":'Mangor Hill, Vasco Da-gama, Goa',
      "status":'Approved'
  }])
  }, [])
  
  const handleChange = (event) => {
    setAction(event.target.value);
  };
  return (
    <>
      <Title>Documents Verification</Title>
      <Table sx={{ width:'95%', marginLeft:'2rem', marginTop: '2.5rem' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Users</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Aadhar Number</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Document</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }} align="center">Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <Avatar sx={{marginTop:"0.5rem", marginLeft:"1rem"}} src="/broken-image.jpg" />
              <TableCell>{row.orderid}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell><Button variant="contained" onClick={()=>{setShowDocument(true)}}>Documents</Button></TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right" >
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
              </FormControl>
            </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>

      </>
  );  
}