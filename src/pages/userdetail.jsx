import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  TextField,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';

export default function UserDetailsPage({ userId, router }) {
  const users = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    name: 'Akbarov Islomdek',
    company: 'General Motors',
    service: 'UX&UI design',
    deadline: '5 month',
    price: '$500',
    updated: '15.05.2024',
  }));

  const [form, setForm] = useState({
    company: '',
    service: '',
    phone: '',
    contactTime: '',
    userPrice: '',
    adminPrice: '',
    userDeadline: '',
    adminDeadline: '',
    userComment: '',
    adminComment: '',
    cashback: '',
    projectType: '',
    priority: '',
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6">user not found</Typography>
        <Button variant="contained" onClick={() => router.navigate('/user')} sx={{ mt: 2 }}>
          Back to users
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Order Details
      </Typography>
      <Paper sx={{ padding: 3, borderRadius: 2 }}>
        <Grid container spacing={3}>



          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone" value={form.phone} onChange={handleChange('phone')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Contact Time" value={form.contactTime} onChange={handleChange('contactTime')} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="User’s Price" value={form.userPrice} onChange={handleChange('userPrice')} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="User’s Price" value={form.userPrice} onChange={handleChange('userPrice')} />
          </Grid>
        </Grid>
      </Paper>

      <Box>
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
      </Box>
    </Box>


  );
}
