import { Grid, Paper, Typography } from '@mui/material';
import '../App.css';
import React from 'react';
import { paperStyle } from '../styles/styles';

const Security: React.FC = (): React.ReactElement => {
    return (
        <div className='Page'>
            <div className="Page-title">
                <Typography variant="h1">Security</Typography>
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
export default Security;