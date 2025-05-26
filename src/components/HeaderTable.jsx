import { AddCircleOutline, ArrowBackIos } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderTable = ({status, link, name}) => {
  const navigate = useNavigate()
  return (
   <Card sx={{width: '100%', margin: '0 0 10px', padding: '5px'}}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    {status === 'save' ? (
                        <Button variant="contained" color="primary" onClick={() => navigate(link)}>
                            <AddCircleOutline/>
                        </Button>
                    ) : status === 'back' ? (
                        <Button variant="contained" onClick={() => navigate(link)}
                                sx={{backgroundColor: 'red', '&:hover': {backgroundColor: 'darkred'}}}>
                            <ArrowBackIcon/>
                        </Button>
                    ) : (
                        <></>
                    )}
                </Box>
            </CardContent>
        </Card>
  )
}

export default HeaderTable