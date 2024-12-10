import { Container, Paper, Typography } from '@mui/material';
import '../App.css';

const Cyber: React.FC = (): React.ReactElement => {
    return (
        <Container >

            <div className="Page-title">
                <Typography variant="h1">Cyber</Typography>
            </div>

            <div className="Page-content">
                <Paper elevation={24} variant='outlined' sx={{ marginTop: '10px', width: "80%", textAlign: "center", padding: "20px" }}>
                    <iframe title="TryHackMe Profile" src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2066148" style={{ border: 'none', width: '358px' }}></iframe>
                </Paper>

            </div>
        </Container>

    )
}

export default Cyber;