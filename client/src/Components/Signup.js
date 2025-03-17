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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const defaultTheme = createTheme();

export default function Signup() {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const formData = { name, email, phone, password, role };
        console.log(formData);
        try {
            const formData = { name, email, phone, password, role };
             const response=await API.post("signup", formData);
            navigate("/login");
        } catch (error) {
            console.log(error);
            
            alert("Sign up failed!");
        }
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
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} Validate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            size="small"
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            size="small"
                            id="phone"
                            label="Phone Number"
                            name="phone"
                            autoComplete="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            size="small"
                            id="password"
                            label="Set Password"
                            name="password"
                            autoComplete="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        <FormControl fullWidth margin="normal" size="small" >
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                                labelId="role-label"
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                label="Role"
                            >
                                <MenuItem value="patient">Patient</MenuItem>
                                <MenuItem value="provider">provider</MenuItem>

                            </Select>
                        </FormControl>

                        <FormControlLabel
                            control={<Checkbox
                                value="remember"
                                color="primary"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!rememberMe} 
                        >
                            Sign Up
                        </Button>
                        <Grid container>

                            <Grid item>
                                <Link to="/login" variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
