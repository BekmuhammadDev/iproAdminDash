import { Grid } from '@mui/material'
import React from 'react'
import HeaderTable from '../../components/HeaderTable'
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Navigate, useNavigate } from 'react-router-dom';
const UploadBox = styled(Box)(({ theme }) => ({
  border: '2px dashed #2196f3',
  padding: theme.spacing(4),
  textAlign: 'center',
  color: '#2196f3',
  borderRadius: 8,
  cursor: 'pointer',
}));

const AddService = () => {
    const navigate =useNavigate()
  return (
    <Grid sx={{width: "100%", margin: "0 auto", padding: "5px"}}>
        <HeaderTable name={"Service Create"} status={'back'} link={'/dashboard/service'}/>
        <Box
      sx={{
        p: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 1200,
          p: 4,
        }}
      >
        <Box mb={2}>
          <Typography variant="subtitle2" gutterBottom>
            TITLE
          </Typography>
          <TextField fullWidth placeholder="Title of service" variant="outlined" />
        </Box>

        <Box mb={2}>
          <Typography variant="subtitle2" gutterBottom>
            DESCRIPTION
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            placeholder="Descriptions"
            variant="outlined"
          />
        </Box>

        <Box mb={4}>
          <UploadBox>
            <CloudUploadIcon fontSize="large" />
          </UploadBox>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="outlined" onClick={()=>navigate("/dashboard/service")}>Cancel</Button>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #2196f3, #21cbf3)',
              color: 'white',
              boxShadow: 3,
            }}
          >
            Save
          </Button>
        </Box>
      </Paper>
    </Box>        
    </Grid>
  )
}

export default AddService