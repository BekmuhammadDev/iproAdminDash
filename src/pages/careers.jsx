import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';

export default function CareersPage() {
    const jobs = [
      { title: 'Frontend Developer', location: 'Tashkent', type: 'Full-time', posted: '14.05.2025' },
      { title: 'Backend Developer', location: 'Remote', type: 'Part-time', posted: '12.05.2025' },
    ];
  
    return (
      <Box p={3}>
        <Typography variant="h5" fontWeight={700} mb={2}>Careers</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ background: '#f5f7fa' }}>
              <TableRow>
                <TableCell>Job Title</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Job Type</TableCell>
                <TableCell>Posted</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job, i) => (
                <TableRow key={i}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>{job.posted}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
  