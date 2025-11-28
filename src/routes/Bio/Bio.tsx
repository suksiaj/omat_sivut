import { Typography, Paper, Grid } from '@mui/material';
import '../../App.css';
import { paperStyle } from '../../styles/styles';

const Bio: React.FC = (): React.ReactElement => {
    return (
        <div className='Page'>

            <div className="Page-title">
                <Typography variant="h1">Bio</Typography>
            </div>

            <Grid container direction='row' justifyContent='center' alignItems='center'>

                <div className="Page-content">
                    <Paper elevation={24} variant='elevation' sx={paperStyle}>
                        <Typography variant='h4'>Jesse Suksia</Typography>
                        <Typography>
                            Hi! I'm Jesse Suksia, data processing student and security professional from Finland.
                            I'm currently studying data processing at the South-Eastern Finland University of Applied Sciences (XAMK).
                            I'm also working as a security professional at a security company in Tampere.
                            More about me in seperate sections around this website
                        </Typography>
                        <br />
                        <Typography variant='h5'>Intrests</Typography>

                        <Typography>
                            I'm intrested in software development, cybersecurity, and games.
                            I'm also intrested in safety and security in general due to my current profession.
                        </Typography>
                        <br />
                        <Typography variant='h5'>Future</Typography>

                        <Typography>
                            I'm currently looking for a trainee position. Possible positions could be for exapmle software developer, game developer and test engineer
                        </Typography>
                    </Paper>


                </div>

                <div className="Page-content">
                    <Paper
                        elevation={24}
                        variant='elevation'
                        sx={paperStyle}>
                        <img src="/images/mina.jpg" alt="Jesse Suksia" className="Page-image" />
                    </Paper>

                </div>

            </Grid>

        </div>

    )
}

export default Bio;