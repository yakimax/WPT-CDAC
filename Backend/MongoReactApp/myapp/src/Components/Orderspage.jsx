import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from './Navbar' ;
  
function Orderspage() {
  return (
    <div>
    <Navbar/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>S.no</TableCell>
          <TableCell align="right">Product</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Orderspage