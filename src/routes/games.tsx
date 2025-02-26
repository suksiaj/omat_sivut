import { Grid, Paper, Typography } from '@mui/material';
import '../App.css';

const paperStyle = {
    marginTop: '10px',
    width: '80%',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'inherit',
    color: 'white',
    minHeight: '20vh'
};

const Games: React.FC = (): React.ReactElement => {
    return (
        <div className='Page'>
            <div className="Page-title">
                <Typography variant="h1">Games</Typography>
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
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nemo facere
                            cupiditate deleniti qui expedita, suscipit beatae exercitationem quae, sit nam
                            facilis at esse sint nesciunt eveniet maiores earum vel?
                        </Typography>
                    </Paper>

                </div>

            </Grid>

        </div>
    )
}

export default Games;