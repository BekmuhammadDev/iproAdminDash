import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';

export default function ServicesPage() {
    const services = [
      { title: 'Graphic Design', projects: 40 },
      { title: 'Telegram Bots', projects: 12 },
      { title: 'CRM Systems', projects: 5 },
    ];
  
    return (
      <Box p={3}>
        <Typography variant="h5" fontWeight={700} mb={2}>Services</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ background: '#f5f7fa' }}>
              <TableRow>
                <TableCell>Service Title</TableCell>
                <TableCell>Total Projects</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service, i) => (
                <TableRow key={i}>
                  <TableCell>{service.title}</TableCell>
                  <TableCell>{service.projects}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
  