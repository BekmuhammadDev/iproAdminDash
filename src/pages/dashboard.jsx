import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Paper } from '@mui/material';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PageContainer } from '@toolpad/core/PageContainer';

const stats = [
  { value: 150, label: 'Users' },
  { value: 70, label: 'Orders' },
  { value: 10, label: 'Websites' },
  { value: 5, label: 'CRM' },
  { value: 40, label: 'Graphic Design' },
  { value: 12, label: 'Telegram Bot' },
  { value: 3, label: 'UX&UI Design' },
  { value: 2, label: 'IOS APP' },
];

const data = [
  { month: 'Yanvar', users: 50 },
  { month: 'Fevral', users: 40 },
  { month: 'Mart', users: 60 },
  { month: 'Aprel', users: 80 },
  { month: 'May', users: 70 },
  { month: 'Iyun', users: 90 },
  { month: 'Iyul', users: 85 },
  { month: 'Avgust', users: 65 },
  { month: 'Sentabr', users: 95 },
  { month: 'Oktabr', users: 100 },
  { month: 'Noyabr', users: 85 },
  { month: 'Dekabr', users: 60 },
];

export default function DashboardContent() {
  return (
    <PageContainer>
      <Box sx={{ px: 2, py: 4 }}>
        <Grid container spacing={2}>
          {stats.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card elevation={1} sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {item.value}
                  </Typography>
                  <Typography color="text.secondary">{item.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Chart */}
        <Paper elevation={1} sx={{ mt: 4, p: 2, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Users
          </Typography>
          {/* You can add date pickers here */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#007BFF" strokeWidth={2} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </PageContainer>
  );
}
