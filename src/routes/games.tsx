import { Grid, Paper, Typography } from '@mui/material';
import '../App.css';

const Games: React.FC = (): React.ReactElement => {
    return(
        <div className='Page'>
        <div className="Page-title">
            <Typography variant="h1">Games</Typography>
        </div>

        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <div className="Page-content">
                <Paper
                    elevation={24}
                    variant='elevation'
                    sx={{ marginTop: '10px', width: "80%", textAlign: "center", padding: "20px", backgroundColor: "inherit", color: 'inherit' }}>
                    <Typography>
                        Asiaa
                    </Typography>
                </Paper>

            </div>
            <div className="Page-content">
                <Paper
                    elevation={24}
                    variant='elevation'
                    sx={{ marginTop: '10px', width: "80%", textAlign: "center", padding: "20px", backgroundColor: "inherit", color: 'inherit' }}>
                    <Typography>
                        My introduction to IT fiel was through game development open courses provided by South-Eastern Finland University of Applied Sciences (XAMK).
                        I was totally hooked and next spring I applied to study data processing at XAMK.
                    </Typography>
                </Paper>

            </div>

        </Grid>

    </div>
    )
}

export default Games;