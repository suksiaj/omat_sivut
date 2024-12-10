import { Typography, Paper, Container } from '@mui/material';
import '../App.css';

const Bio: React.FC = (): React.ReactElement => {
    return (
        <Container>

            <div className="Page-title">
                <Typography variant="h1">Bio</Typography>
            </div>

            <div className="Page-content">
                <Paper elevation={24} variant='outlined' sx={{ marginTop: '10px', width: "80%", textAlign: "center", padding: "20px" }}>
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

        </Container>

    )
}

export default Bio;