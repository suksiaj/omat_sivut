import { Container, Grid, Paper, Typography } from '@mui/material';
import '../App.css';

const Cyber: React.FC = (): React.ReactElement => {
    return (
        <div className='Page'>
            <div className="Page-title">
                <Typography variant="h1">Cyber</Typography>
            </div>

            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <div className="Page-content">
                    <Paper
                        elevation={24}
                        variant='elevation'
                        sx={{ marginTop: '10px', width: "80%", textAlign: "center", padding: "20px", backgroundColor: "inherit" }}>
                        <Typography>
                            Asiaa
                        </Typography>
                    </Paper>

                </div>
                <div className="Page-content">
                    <Paper
                        elevation={24}
                        variant='elevation'
                        sx={{ marginTop: '10px', width: "80%", textAlign: "center", padding: "20px", backgroundColor: "inherit" }}>
                        <iframe title="TryHackMe Profile" src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2066148" style={{ border: 'none', width: '358px' }}></iframe>
                    </Paper>

                </div>

            </Grid>

        </div>

    )
}

export default Cyber;