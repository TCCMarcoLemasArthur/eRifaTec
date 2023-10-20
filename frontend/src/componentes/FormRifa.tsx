import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../estilos/formRifaStyles';
import axios from 'axios';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormRifa() {
  return (
    <>
      <Grid
        container
        xs={12}
        component="form" 
        sx={styles.formRifa}
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Grid>
    </>
  )
}