import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Grid } from '@mui/material';
import CountryBox from './CountryBox';

function App() {
  return (<Grid container spacing={2}>
    <Grid item xs={6}>
      <CountryBox />
    </Grid>
    <Grid item xs={6}>

    </Grid>
  </Grid>)
}

export default App;
