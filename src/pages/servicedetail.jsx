import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

export default function ServiceFormPage({ router }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: null,
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Add New Service
      </Typography>
      <Paper sx={{ padding: 3, borderRadius: 2 }}>
        <Grid container spacing={3}>
          {/* Title */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              value={form.title}
              onChange={handleChange('title')}
            />
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={5}
              value={form.description}
              onChange={handleChange('description')}
            />
          </Grid>

          {/* Image Upload */}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ padding: 2 }}
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>
            {form.image && (
              <Typography variant="body2" mt={1}>
                Selected: {form.image.name}
              </Typography>
            )}
          </Grid>

          {/* Buttons */}
    
        </Grid>
      </Paper>
    </Box>
  );
}
