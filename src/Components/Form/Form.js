import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import { deepOrange, green } from '@mui/material/colors';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
import './Form.css'

const ButtonFrom = styled(Button)(({ theme }) => ({
    marginTop: '1rem',
   
}));
const Form = () =>{

    return(
        <Container maxWidth='xs' sx={{marginTop: '2rem', display: 'flex', justifyContent: 'center'}}>
            <Paper elevation={1} className="paper-form">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                    <LockIcon/>
                </Avatar>
                <Typography variant="h5">Sign In</Typography>
                <FormControl margin="normal" required variant="standard">
                    <Select
                    value='english'
                    >
                        <MenuItem value='english'>English</MenuItem>
                        <MenuItem value='french'> French</MenuItem>
                        <MenuItem value='spanish'>Spanish</MenuItem>
                    </Select>
                </FormControl>
            <form className="form">
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <Input id="email" name="email" autoFocus></Input>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input id="password" name="password"></Input>
                </FormControl>
                <FormControlLabel control={<Checkbox color="primary"/>} label='remember me'/>
                <ButtonFrom variant="contained" type="submit" fullWidth color="primary" className="btn-from">Sig in</ButtonFrom>
            </form>
            </Paper>
        </Container>
            
      )
}


export default Form