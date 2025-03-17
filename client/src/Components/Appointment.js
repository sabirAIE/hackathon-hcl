import React, { useContext, useState } from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Container, Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../ApiData/AuthContext';
import axios from 'axios';
import API from '../ApiData/Api';

const defaultTheme = createTheme();

const Appointment = () => {
    const { user,userId} = useContext(AuthContext); 
   
    const [doctor, setDoctor] = useState('');
    const [reason, setReason] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [status, setStatus] = useState('scheduled'); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        const appointmentData = {
            userId:userId, 
            providerId: doctor, 
            date: appointmentDate, 
            time: appointmentTime,  
            status: status, 
            notes: reason, 
        };

        try { 
      
            const response = await API.post('appointments/', appointmentData);
            console.log('Appointment created:', response.data);
            alert('Appointment successfully booked!');
        } catch (error) {
    
            console.error('Error creating appointment:', error);
            alert('There was an error booking your appointment.');
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
                    <h2>Book an Appointment</h2>
                    <form onSubmit={handleSubmit}>
                  
                        <TextField
                            label="Reason for Appointment"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={2}
                            margin="normal"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        />
                       
                        <TextField
                            label="Appointment Date"
                            type="date"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Appointment Time"
                            type="time"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

            
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="doctor-select-label">Select Doctor</InputLabel>
                            <Select
                                labelId="doctor-select-label"
                                value={doctor}
                                onChange={(e) => setDoctor(e.target.value)}
                                required
                            >
                                <MenuItem value="doctor1">Doctor 1</MenuItem>
                                <MenuItem value="doctor2">Doctor 2</MenuItem>
                                <MenuItem value="doctor3">Doctor 3</MenuItem>
                            </Select>
                        </FormControl>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                            <Button type="submit" variant="contained" color="primary">
                                Register Appointment
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Appointment;
