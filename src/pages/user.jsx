import React from 'react';
import {
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

export default function UserPage({ router }) {
  const users = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    name: 'Akbarov Islomdek',
    company: 'General Motors',
    service: 'UX&UI design',
    deadline: '5 month',
    price: '$500',
    updated: '15.05.2024',
  }));

  return (
    <div style={{ padding: '24px' }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        users
      </Typography>
      <TableContainer component={Paper} style={{ borderRadius: 12 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>User's Deadline</TableCell>
              <TableCell>User's Price</TableCell>
              <TableCell>Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                hover
                style={{ cursor: 'pointer' }}
                onClick={() => router.navigate(`/user/${row.id}`)}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.service}</TableCell>
                <TableCell>{row.deadline}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.updated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
