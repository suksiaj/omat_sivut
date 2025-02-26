import { Grid, Paper, Typography } from '@mui/material';
import '../App.css';
import { paperStyle } from '../styles/styles';

const Software: React.FC = (): React.ReactElement => {
    return (
        <div className='Page'>
            <div className="Page-title">
                <Typography variant="h1">Software</Typography>
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
                        sx={paperStyle}
                    >
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                            quibusdam voluptate id impedit placeat molestias obcaecati ullam iusto,
                            amet maiores incidunt non. Quia minima est perspiciatis ea temporibus reprehenderit soluta.
                        </Typography>
                    </Paper>

                </div>

            </Grid>

        </div>
    )
}

export default Software;