import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  TextField,
} from '@mui/material';

export default function OrderDetailsPage({ router }) {
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

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Order Details
      </Typography>
      <Paper sx={{ padding: 3, borderRadius: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Company Name" value={form.company} onChange={handleChange('company')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Service Type" value={form.service} onChange={handleChange('service')} />
          </Grid>

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
            <TextField fullWidth label="Admin Price" value={form.adminPrice} onChange={handleChange('adminPrice')} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="User’s Deadline" value={form.userDeadline} onChange={handleChange('userDeadline')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Admin Deadline" value={form.adminDeadline} onChange={handleChange('adminDeadline')} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="User’s Comment"
              value={form.userComment}
              onChange={handleChange('userComment')}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Admin Comment"
              value={form.adminComment}
              onChange={handleChange('adminComment')}
              multiline
              rows={3}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Cashback" value={form.cashback} onChange={handleChange('cashback')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Project Priority" value={form.priority} onChange={handleChange('priority')} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Project Type" value={form.projectType} onChange={handleChange('projectType')} />
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* Bu joy bo‘sh qolishi mumkin yoki boshqa input qo‘shishingiz mumkin */}
          </Grid>
        </Grid>

        {/* Tugmalar */}
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button variant="contained" color="success">
            Accept
          </Button>
          <Button variant="outlined" color="error">
            Reject
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="text" onClick={() => router.navigate('/orders')}>
            Back to Orders
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
