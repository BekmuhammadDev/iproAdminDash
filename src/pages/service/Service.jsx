import { Grid } from '@mui/material'
import React from 'react'
import HeaderTable from '../../components/HeaderTable'

const Service = () => {
  return (
    <Grid sx={{width: "100%", margin: "0 auto", padding: "5px"}}>
      <HeaderTable name={'Service'} status={'save'} link={'add'}/>
    </Grid>
  )
}

export default Service