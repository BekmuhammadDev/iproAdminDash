// layout/Dashboard.jsx
import { Grid } from '@mui/material';
import React from 'react';
import {Paper, Typography } from '@mui/material';

const stats = [
  { label: 'Users', value: 150 },
  { label: 'Orders', value: 70 },
  { label: 'Websites', value: 10 },
  { label: 'CRM', value: 5 },
  { label: 'Graphic Design', value: 40 },
  { label: 'Telegram Bot', value: 12 },
  { label: 'UX&UI Design', value: 3 },
  { label: 'IOS APP', value: 2 },
];
const Dashboard = () => {
  return (
  <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{ padding: 3 }}
    >
      {stats.map((stat, index) => (
        <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              textAlign: 'center',
              borderRadius: 2,
              backgroundColor: '#ffffff',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
              minHeight: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: '#000' }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: '#5e6278', fontSize: '14px' }}
            >
              {stat.label}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
