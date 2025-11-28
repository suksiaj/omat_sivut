import { Grid, Paper, Typography } from '@mui/material';
import '../../App.css';
import './Cyber.css';
import { paperStyle } from '../../styles/styles';

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
                        sx={paperStyle}>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nemo facere
                            cupiditate deleniti qui expedita, suscipit beatae exercitationem quae, sit nam
                            facilis at esse sint nesciunt eveniet maiores earum vel?
                        </Typography>
                    </Paper>

                </div>
                <div className="Page-content">
                    <Paper
                        elevation={24}
                        variant='elevation'
                        sx={paperStyle}>
                        <Typography variant='h4'>
                            Badges and certificates
                        </Typography>

                        <iframe title="TryHackMe Profile" src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2066148" style={{ border: 'none', width: '358px' }}></iframe>
                    </Paper>

                </div>

            </Grid>

        </div>

    )
}

export default Cyber;