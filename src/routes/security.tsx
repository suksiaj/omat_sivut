import { Grid, Paper, Typography } from '@mui/material';
import '../App.css';

const Security: React.FC = (): React.ReactElement => {
    return(
        <div className='Page'>
        <div className="Page-title">
            <Typography variant="h1">Security</Typography>
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
                    <Typography>
                        Lisää asiaa
                    </Typography>
                </Paper>

            </div>

        </Grid>

    </div>
    )
}
export default Security;