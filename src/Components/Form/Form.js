/* ------------ Dependecies ------------*/
import React, {useContext} from "react";

/* ------------ Material UI ------------*/
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import { deepOrange } from '@mui/material/colors';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import { styled } from '@mui/system';

/* ------------Context ------------*/
import { LanguageContext } from "../../Context/LanguageContext";

/* ------------ Styles ------------*/
import './Form.css'

/* ------------ Styles ------------*/
const ButtonFrom = styled(Button)(({ theme }) => ({
    marginTop: '1rem',
   
}));


/* ------------ Words ------------*/

const words = {
    english:{

        signIn: 'Sign In', 
        email: 'Email',
        password: 'Password',
        remember: 'Remember Me'


    },
    french:{
        signIn: 'Se Connecter', 
        email: 'Adresse Electronique',
        password: 'Mot de Passe',
        remember: 'Souviens-toi De Moi'
       
    },
    spanish:{
        signIn: 'Registrarse', 
        email: 'Correo Electronico',
        password: 'Contraseña',
        remember: 'Recordarme'
    }
}



/* ------------ Component ------------*/

const Form = () => {

    /* ------------ Context ------------*/
    const { language, toggleLanguage } = useContext(LanguageContext);

     /* ------------ Words ------------*/
     const {signIn, email, password, remember} = words[language]

    /* ------------ Function ------------*/


    /* ------------ Render ------------*/
    return(
        <Container maxWidth='xs' sx={{marginTop: '2rem', display: 'flex', justifyContent: 'center'}}>
            <Paper elevation={1} className="paper-form">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                    <LockIcon/>
                </Avatar>
                <Typography variant="h5">{signIn}</Typography>
                <FormControl margin="normal" required variant="standard">
                    <Select
                    value={language}
                    onChange={toggleLanguage}
                    >
                        <MenuItem value='english'>English</MenuItem>
                        <MenuItem value='french'> French</MenuItem>
                        <MenuItem value='spanish'>Spanish</MenuItem>
                    </Select>
                </FormControl>
                <form className="form">

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor='email'>{email}</InputLabel>
                        <Input id="email" name="email" autoFocus></Input>
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor='password'>{password}</InputLabel>
                        <Input id="password" name="password"></Input>
                    </FormControl>

                    <FormControlLabel control={<Checkbox color="primary"/>} label={remember}/>
                    
                    <ButtonFrom variant="contained" type="submit" fullWidth color="primary" className="btn-from">{signIn}</ButtonFrom>
                </form>
            </Paper>
        </Container>
            
      )
}


export default Form