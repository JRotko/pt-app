import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {withRouter} from "react-router-dom";


const pages = ['Customers', 'Trainings'];


const Navbar = (props) => {
  const { history } = props

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
  }

  return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
            PT-app
            </Typography>
            <Button variant="contained" onClick={() => handleMenuClick('/')}>Customers</Button>
            <Button variant="contained" onClick={() => handleMenuClick('/trainings')}>Trainings</Button>
        </Toolbar>
        </Container>
    </AppBar>
  );
};
export default withRouter(Navbar);