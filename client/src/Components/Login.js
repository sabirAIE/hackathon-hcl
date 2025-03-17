import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import { AuthContext } from '../ApiData/AuthContext';
import API from '../ApiData/Api';

const defaultTheme = createTheme();

export default function Login() {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false); 

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(formData);
        // try {
        //     const { data } = await API.post("/auth/login", formData);
        //     localStorage.setItem("token", data.token);
        //     setUser(data.user);
        //     navigate("/dashboard");
        // } catch (error) {
        //     alert("Login failed!");
        // }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} Validate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            size="small"
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            size="small"
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />

                       
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/Signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
