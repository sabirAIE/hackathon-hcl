import { Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import StairsIcon from '@mui/icons-material/Stairs';
function PatientDashBorad() {
  return (
    <Grid container xs={12} p={2} >
      <Grid xs={6} item display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}>
        <Typography variant='h6'>
          Welcome to Patient Dashboard
        </Typography>
      </Grid>
      <Grid xs={6} item display={'flex'} justifyContent={'flex-end'} alignItems={'flex-start'}>
        <Typography variant='h6'>
          Siva !!!
        </Typography>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Card style={{ width: "100%", height: "100%", background: "#ECECEC" }}>
          <Grid container>
            <Grid xs={12} item display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'} p={2}>
              <Typography variant='h6'>
                Wellness Goals
              </Typography>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={'space-between'} alignItems={'space-between'}>
              <Grid item xs={4} p={2}>
                <Card style={{ width: "100%", height: "100%", background: "white" }} p={3}>
                  <Stack p={2} display={"flex"} direction={'row'}>   <StairsIcon style={{ height: "20px" }} />Steps</Stack>
                  <Stack display={"flex"} direction={'row'} p={1}>
                    <Typography fontWeight={"bold"}>5000</Typography>/6000Steps

                  </Stack>

                </Card>
              </Grid>
              <Grid item xs={4} p={2}>
                <Card style={{ width: "100%", height: "100%", background: "white" }} p={3}>
                  <Stack p={2} display={"flex"} direction={'row'}>   <StairsIcon style={{ height: "20px" }} />Active Time</Stack>
                  <Stack display={"flex"} direction={'row'} p={1}>
                    <Typography fontWeight={"bold"}>50</Typography>/60Mint

                  </Stack>
                </Card>
              </Grid>
              <Grid item xs={4} p={2}>
                <Card style={{ width: "100%", height: "100%", background: "white" }} p={3}>
                  <Stack p={2} display={"flex"} direction={'row'}>   <StairsIcon style={{ height: "20px" }} />Sleep</Stack>
                  <Stack display={"flex"} direction={'row'} p={1}>
                    <Typography fontWeight={"bold"}>6hr</Typography>30Mint

                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} item display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'} p={2}>
            <Card style={{ width: "100%", height: "15vh", background: "white" }} p={3}>
              <Typography variant='subtitle1' fontWeight={"bold"} p={2}>
                Preventive Care Reminder
              </Typography>
              <Typography variant='body1' ml={2}>Upcoming Blood Test march 30</Typography>
            </Card>
          </Grid>
          <Grid xs={12} item display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'} p={2}>
            <Card style={{ width: "100%", height: "15vh", background: "white" }} p={3}>
              <Typography variant='subtitle1' fontWeight={"bold"} p={2}>
                Preventive Care Reminder
              </Typography>
              <Typography variant='body1' ml={2}>Upcoming Blood Test march 30</Typography>
            </Card>
          </Grid>
        </Card>






      </Grid>


    </Grid>


  )
}

export default PatientDashBorad
