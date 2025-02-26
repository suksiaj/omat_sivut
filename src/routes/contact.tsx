import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import '../App.css';
import { formStyle, paperStyle, formTexFieldStyle } from '../styles/styles';

const Contact: React.FC = (): React.ReactElement => {
    return (
        <div className="Page">
            <div className="Page-title">
                <Typography variant="h1">Contact me</Typography>
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
                        sx={formStyle}>

                        <TextField id="name" label="Name" variant="filled" margin='dense' sx={formTexFieldStyle}/>
                        <TextField id="topic" label="Topic" variant="filled" margin='dense' sx={formTexFieldStyle}/>
                        <TextField id="email" label="E-mail" variant="filled" margin='dense' sx={formTexFieldStyle}/>
                        <TextField id="message" label="Message" variant="filled" multiline rows={4} margin='dense'sx={formTexFieldStyle}/>

                        <Button variant="contained" sx={{ margin: "5px" }}>Send</Button>

                    </Paper>

                </div>
            </Grid>
        </div>
    )
}
export default Contact;