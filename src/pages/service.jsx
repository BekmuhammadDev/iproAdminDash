import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from '@mui/material';

export default function ServicesPage({ router }) {
  const services = [
    { title: 'Websites', projects: 40 },
    { title: 'Mobile', projects: 12 },
    { title: 'SMM', projects: 5 },
    { title: 'Marketing', projects: 40 },
    { title: 'Target', projects: 12 },
    { title: 'Graphic design', projects: 5 },
    { title: 'Moution design', projects: 40 },
  ];

  const handleRowClick = (serviceTitle) => {
    const slug = serviceTitle.toLowerCase().replace(/\s+/g, '-');
    router.navigate(`/service/${slug}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Services
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: '#f5f7fa' }}>
            <TableRow>
              <TableCell>Service Title</TableCell>
              <TableCell>Total Projects</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((row, i) => (
              <TableRow
                key={i}
                hover
                style={{ cursor: 'pointer' }}
                onClick={() => handleRowClick(row.title)}
              >
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.projects}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
