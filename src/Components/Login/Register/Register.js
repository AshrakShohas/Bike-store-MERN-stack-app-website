import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import registration from '../../../images/reg.png'
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const { user, registerUser, isLoading, authError } = useAuth()


    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {

            alert("Your password did not match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history)
        e.preventDefault();
    }
    return (
        <Container sx={{ mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading ? <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Name"
                            variant="standard"
                            name="name"
                            onBlur={handleonBlur}
                        />
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Email"
                            type="email"
                            variant="standard"
                            name="email"
                            onBlur={handleonBlur}
                        />
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Password"
                            type="password"
                            variant="standard"
                            name="password"
                            onBlur={handleonBlur}
                        />
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Retype Your Password"
                            type="password"
                            variant="standard"
                            name="password2"
                            onBlur={handleonBlur}
                        />
                        <Button sx={{ width: "75%", m: 1 }} variant='contained' type="submit"> Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'>
                            <Button variant="text">Already Registered? please Login</Button>
                        </NavLink>
                    </form> :
                        <CircularProgress />

                    }
                    {
                        user?.email && <Alert severity="success">User Create Successfully!!!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={registration} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;